import { useEffect, useState, FC } from "react";
import axios from "axios";

import User, { NewUser, emptyUser } from "../models/User";
import Sidebar from "../components/Sidebar";
import TableRow from "../components/TableRow/TableRow";
import { itemsPerPage, windowBreakpoint } from "../utils/constants";
import Pagination from "../components/Pagination";
import { BsPlusLg } from "react-icons/bs";
import Breadcrumbs from "../components/Breadcrumbs";

const Table: FC = (props: any) => {
  const [volunteers, setVolunteers] = useState<User[]>([emptyUser]);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [key, setKey] = useState<number>(1);

  const totalPages = Math.ceil(volunteers.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect((): any => {
    fetchVolunteers();
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowWidth);
  }, [props]);

  const fetchVolunteers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/bog/users");
      setVolunteers(
        response.data.map((volunteer: User) => ({ ...volunteer, clicks: 0 }))
      );
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
      setKey((prevState) => prevState + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const editVolunteer = async (data: User) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/bog/users/${data.id}`,
        data
      );
      setVolunteers((prevState) => {
        const index = prevState.findIndex(
          (volunteer) => volunteer.id === response.data.id
        );
        prevState[index] = response.data;
        return prevState;
      });
      setKey((prevState) => prevState + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const addVolunteerHandler = () => {
    setShowSidebar(true);
    setSelectedUser(null);
  };

  const editVolunteerHandler = (user: User) => {
    setShowSidebar(true);
    setSelectedUser(user);
  };

  const toPage = (page: number) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  const updateClicks = (volunteerId: string) => {
    setVolunteers((prevState) =>
      prevState.map((volunteer) => {
        if (volunteer.id === volunteerId) {
          return { ...volunteer, clicks: volunteer.clicks + 1 };
        } else return volunteer;
      })
    );
  };

  return (
    <div className="p-8">
      <div className="m-5">
        <div className="overflow-hidden bg-gray-900 rounded-lg border border-gray-200 shadow-md">
          <div className="flex text-white justify-between">
            <Breadcrumbs routes={null} />
            <Pagination
              totalPages={totalPages}
              toPage={(page: number) => toPage(page)}
              currentPage={currentPage}
            />
            <div className="justify-end">
              <button
                className="group relative p-2 overflow-hidden rounded-md bg-green-500 text-md text-white"
                onClick={addVolunteerHandler}
              >
                <BsPlusLg color="white" className="h-6 w-6" />
                <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
              </button>
            </div>
          </div>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-200">
            <thead className="bg-gray-50 dark:bg-gray-900 text-white">
              <tr>
                {windowWidth > windowBreakpoint ? (
                  <>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium">
                      Hero Project
                    </th>
                    <th scope="col" className="px-6 py-4 max-w-sm font-medium">
                      Rating
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium"></th>
                  </>
                ) : (
                  <th scope="col" className="px-6 py-4 font-medium">
                    Volunteer Information
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y dark:bg-gray-700 divide-gray-100 border-t border-gray-100">
              {volunteers.slice(startIndex, endIndex).map((volunteer) => (
                <TableRow
                  key={volunteer.id}
                  volunteer={volunteer}
                  editVolunteerHandler={(v: any) => editVolunteerHandler(v)}
                  deleteVolunteerHandler={(v: string) => deleteVolunteers(v)}
                  windowWidth={windowWidth}
                  updateClicks={(id: string) => updateClicks(id)}
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
        selectedUser={selectedUser}
        editVolunteer={editVolunteer}
      />
    </div>
  );
};

export default Table;
