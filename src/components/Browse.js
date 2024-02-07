import React from 'react';
import Header from './Header';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <div>Something went wrong with the header component.</div>;
    }

    // If no error, render children as normal
    return this.props.children;
  }
}

function Browse() {
  return (
    <ErrorBoundary>
      <div>
        <Header />
      </div>
    </ErrorBoundary>
  );
}

export default Browse;
