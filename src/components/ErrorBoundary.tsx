// https://blog.appsignal.com/2022/06/15/how-to-handle-errors-in-react.html
// https://stackoverflow.com/questions/63916900/how-to-properly-type-a-react-errorboundary-class-component-in-typescript
import React, { Component, ErrorInfo } from "react";

interface State {
    hasError: boolean,
    error: Error | null,
}

export class ErrorBoundary extends Component<React.PropsWithChildren, State> {
    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service like AppSignal
        // logErrorToMyService(error, errorInfo);
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        const { hasError, error } = this.state;

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <p>Something went wrong 😭</p>

                    {error!.message && <span>Here's the error: {error!.message}</span>}
                </div>
            );
        }

        return this.props.children;
    }
}
