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
                <div class="alert-modal" onclick="event.stopPropagation()" style="max-width: 500px">
                    <h2 class="alert-header">Pipeline Analysis</h2>
                    <div class="alert-item">
                        <span>Total Nodes:</span>
                        <span class="alert-value">${data.num_nodes}</span>
                    </div>
                    <div class="alert-item">
                        <span>Connected Nodes:</span>
                        <span class="alert-value">${data.num_connected}</span>
                    </div>
                    <div class="alert-item">
                        <span>Total Edges:</span>
                        <span class="alert-value">${data.num_edges}</span>
                    </div>
                    <div class="alert-item">
                        <span>Is DAG:</span>
                        <span class="alert-value">${data.is_dag ? 'Yes' : 'No'}</span>
                    </div>
                    ${data.disconnected_nodes.length > 0 ? `
                        <div style="margin-top: 15px; text-align: left;">
                            <span class="node-label" style="color: #ef4444">Disconnected Nodes:</span>
                            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 5px; max-height: 80px; overflow-y: auto; background: var(--bg-tertiary); padding: 8px; border-radius: 6px;">
                                ${data.disconnected_nodes.join(', ')}
                            </div>
                        </div>
                    ` : `
                        <div style="margin-top: 15px; color: #10b981; font-size: 0.85rem; font-weight: 500;">
                            ✨ All nodes are connected!
                        </div>
                    `}
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
