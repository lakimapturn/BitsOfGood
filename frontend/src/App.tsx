import "./App.css";

import Header from "./components/Header";
import Table from "./components/Table";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="background bg-gray-900"></div>
      <Table />
    </div>
  );
};

export default App;
