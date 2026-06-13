import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">Pipeline Architect</div>
      </header>

      <main className="builder-layout">
        <PipelineToolbar />
        <section className="canvas-area">
          <PipelineUI />
        </section>
      </main>
    </div>
  );
}

export default App;
