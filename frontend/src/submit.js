import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('pipeline', JSON.stringify({ nodes, edges }));

            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            // Create a custom alert
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert-overlay';
            alertDiv.onclick = () => document.body.removeChild(alertDiv);
            alertDiv.innerHTML = `
                <div class="alert-modal" onclick="event.stopPropagation()">
                    <h2 class="alert-header">Pipeline Analysis</h2>
                    <div class="alert-item">
                        <span>Nodes:</span>
                        <span class="alert-value">${data.num_nodes}</span>
                    </div>
                    <div class="alert-item">
                        <span>Edges:</span>
                        <span class="alert-value">${data.num_edges}</span>
                    </div>
                    <div class="alert-item">
                        <span>Is DAG:</span>
                        <span class="alert-value">${data.is_dag ? 'Yes' : 'No'}</span>
                    </div>
                    <button class="submit-btn" style="margin-top: 20px; width: 100%" onclick="this.closest('.alert-overlay').click()">Close</button>
                </div>
            `;
            document.body.appendChild(alertDiv);

        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Failed to submit pipeline. Is the backend running?');
        }
    };

    return (
        <div className="submit-container" style={{ border: 'none', padding: 0 }}>
            <button type="button" className="submit-btn" onClick={handleSubmit}>
                Analyze Pipeline
            </button>
        </div>
    );
}
