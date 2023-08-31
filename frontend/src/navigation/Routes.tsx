import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Header from "../components/Header";
import Table from "../screens/Table";
import VolunteerInfo from "../screens/VolunteerInfo";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Table />} />
      <Route path="volunteer/:id" element={<VolunteerInfo />} />
    </Route>
  )
);
