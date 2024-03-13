/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import { Component, ErrorInfo, ReactNode } from 'react';

import { Container, TextField } from './styled';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container>
          <TextField>Opps something went wrong</TextField>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
