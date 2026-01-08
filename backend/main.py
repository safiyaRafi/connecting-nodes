from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json
from collections import deque

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development, allow all
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

def is_dag(nodes, edges):
    # Build adjacency list and in-degree count
    adj = {node['id']: [] for node in nodes}
    in_degree = {node['id']: 0 for node in nodes}
    
    for edge in edges:
        source = edge['source']
        target = edge['target']
        if target in adj: # Ensure target exists in nodes
            adj[source].append(target)
            in_degree[target] += 1
            
    # Kahn's algorithm
    queue = deque([n for n in in_degree if in_degree[n] == 0])
    visited_count = 0
    
    while queue:
        u = queue.popleft()
        visited_count += 1
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    return visited_count == len(nodes)

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    try:
        pipeline_data = json.loads(pipeline)
        nodes = pipeline_data.get('nodes', [])
        edges = pipeline_data.get('edges', [])
        
        num_nodes = len(nodes)
        num_edges = len(edges)
        
        dag_status = is_dag(nodes, edges)
        
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': dag_status
        }
    except Exception as e:
        return {'error': str(e)}, 400
