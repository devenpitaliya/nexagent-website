import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    console.error('[ErrorBoundary caught]', error, info)
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, background: '#0a0a0f', color: '#f87171', fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: '#fca5a5', marginBottom: 12 }}>Something went wrong</h2>
          <p style={{ color: '#94a3b8', fontSize: 14 }}>Please refresh the page. If the issue persists, contact support.</p>
          {import.meta.env.DEV && (
            <pre style={{ marginTop: 24, whiteSpace: 'pre-wrap', fontSize: 12, opacity: 0.6, maxWidth: 600 }}>
              {this.state.error.toString()}
            </pre>
          )}
        </div>
      )
    }
    return this.props.children
  }
}
