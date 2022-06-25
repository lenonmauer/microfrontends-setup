import { Component } from 'react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export class ErrorBoundary extends Component<Props> {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error(error)
    console.error(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado.</h1>
    }

    return this.props.children
  }
}
