// necessary imports for React
const { useState } = React;

// main app component
function App() {
  // state for items in logs, taken out, and in storage
  // example: const [logs, setLogs] = useState([]);

  return (
    <div>
      <Logs />
      <TakenOut />
      <Storage />
    </div>
  );
}

// logs component
function Logs() {
  // display the logs
  return <div>{/* log items here */}</div>;
}

// taken out component
function TakenOut() {
  // display items currently taken out
  return <div>{/* taken out items here */}</div>;
}

// in storage component
function Storage() {
  // display items in storage
  return <div>{/* in storage items here */}</div>;
}

// render the app to the DOM
ReactDOM.render(<App />, document.getElementById("app"));
