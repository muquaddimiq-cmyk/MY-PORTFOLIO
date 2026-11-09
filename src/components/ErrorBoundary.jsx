import { Component } from 'react';

// If anything crashes, visitors see a message and a Reload button instead of a blank screen.
export default class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error) { console.error(error); }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div style={{ maxWidth: 540, margin: '0 auto', padding: '64px 24px', color: '#A3A3A3', fontSize: 14 }}>
        <p style={{ color: '#fff', fontSize: 18, marginBottom: 8 }}>Something went wrong loading this page.</p>
        <p>Please reload. If it keeps happening, email Muquaddimiq@gmail.com.</p>
        <button onClick={() => location.reload()} style={{ marginTop: 16, padding: '8px 14px', border: '1px solid #444', color: '#fff' }}>Reload</button>
      </div>
    );
  }
}
