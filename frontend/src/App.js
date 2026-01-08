import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <header style={{
        padding: '20px 40px',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--node-border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--accent-primary)' }}>
          VectorShift <span style={{ color: 'var(--text-primary)', fontWeight: 400 }}>Workflow</span>
        </h1>
        <SubmitButton />
      </header>
      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}

export default App;
