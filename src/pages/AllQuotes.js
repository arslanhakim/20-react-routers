import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "p1", author: "Max", text: "Learning React is fun!" },
  { id: "p2", author: "Maximilian", text: "Learning React is great!" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
