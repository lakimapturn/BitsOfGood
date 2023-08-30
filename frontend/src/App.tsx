import { RouterProvider } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Table from "./screens/Table";
import { router } from "./navigation/Routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Header /> */}
      {/* <div className="background bg-gray-900"></div> */}
      {/* <Table /> */}
    </div>
  );
};

export default App;
