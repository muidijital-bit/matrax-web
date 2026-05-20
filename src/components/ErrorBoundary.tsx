import { Component, type ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('[ErrorBoundary]', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="text-slate-500 font-bold">Sayfa yüklenirken bir sorun oluştu.</p>
          <button
            onClick={() => { this.setState({ hasError: false }); window.location.reload(); }}
            className="px-5 py-2.5 rounded-xl bg-brand-navy text-white font-black text-sm hover:opacity-80 transition-opacity"
          >
            Yenile
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
