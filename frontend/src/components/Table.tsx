import { useEffect, useState, FC } from "react";
import axios from "axios";

import User, { NewUser, emptyUser } from "../models/User";
import Sidebar from "./Sidebar";
import TableRow from "./TableRow/TableRow";
import { itemsPerPage, windowBreakpoint } from "../utils/constants";
import Pagination from "./Pagination";

const Table: FC = (props: any) => {
  const [volunteers, setVolunteers] = useState<User[]>([emptyUser]);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [editVolunteer, setEditVolunteer] = useState<User | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(volunteers.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect((): any => {
    fetchVolunteers();
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [props]);

  const fetchVolunteers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/bog/users");
      setVolunteers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVolunteers = async (userId: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/bog/users/${userId}`
      );
      if (response.status === 200) await fetchVolunteers();
    } catch (error) {
      console.log(error);
    }
  };

  const addVolunteer = async (data: NewUser) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/bog/users`,
        data
      );
      if (response.status === 200)
        setVolunteers((prevState) => {
          prevState.push(response.data);
          return prevState;
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addVolunteerHandler = () => {
    setShowSidebar(true);
    setEditVolunteer(null);
  };

  const editVolunteerHandler = (user: User) => {
    setShowSidebar(true);
    setEditVolunteer(user);
  };

  const nextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const prevPage = () => {};

  const toPage = (page: number) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="p-8">
      <Pagination
        totalPages={totalPages}
        toPage={(page: number) => toPage(page)}
        currentPage={currentPage}
      />
      <div className="m-5">
        <div className="pb-4 flex justify-content-end">
          <button
            className="group relative h-12 w-36 overflow-hidden rounded-2xl bg-green-500 text-md text-white"
            onClick={addVolunteerHandler}
          >
            Add Volunteer
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </button>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                {windowWidth > windowBreakpoint ? (
                  <>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Hero Project
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    ></th>
                  </>
                ) : (
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Volunteer Information
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {volunteers.slice(startIndex, endIndex).map((volunteer) => (
                <TableRow
                  key={volunteer.id}
                  volunteer={volunteer}
                  editVolunteerHandler={(v: any) => editVolunteerHandler(v)}
                  deleteVolunteerHandler={(v: string) => deleteVolunteers(v)}
                  windowWidth={windowWidth}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        addVolunteer={addVolunteer}
        editVolunteer={editVolunteer}
      />
    </div>
  );
};

export default Table;
