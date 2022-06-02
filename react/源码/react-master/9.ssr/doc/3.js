class Suspense extends React.Component {
  mounted = null
  state = { loading: false };
  componentDidCatch(error) {
    if (typeof error.then === 'function') {
      this.setState({ loading: true });
      error.then(() => { this.setState({ loading: false }) });
    }
  }
  render() {
    const { fallback, children } = this.props;
    const { loading } = this.state;
    return loading ? fallback : children;
  }
}