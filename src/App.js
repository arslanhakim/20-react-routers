import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuotesDetail from "./pages/QuotesDetail";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Navigate to="/quotes" />}></Route>
          <Route path="/quotes" exact element={<AllQuotes />} />
          <Route
            path="/quotes/:quoteId"
            exact
            element={<QuotesDetail />}
          ></Route>
          <Route path="/new-quote" exact element={<NewQuote />}></Route>
          <Route path="*" exact element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
