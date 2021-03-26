import * as React from "react"
import ReactDOM from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter as Router } from "react-router-dom"
import { App } from "./App"

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>,
  document.getElementById("root")
);