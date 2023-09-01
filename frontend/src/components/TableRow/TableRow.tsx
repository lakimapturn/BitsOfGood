import { useNavigate } from "react-router-dom";

import User from "../../models/User";
import { windowBreakpoint } from "../../utils/constants";
import { ratingStars } from "../../utils/functions";

interface Props {
  volunteer: User;
  editVolunteerHandler: Function;
  deleteVolunteerHandler: Function;
  windowWidth: number;
  updateClicks: Function;
}

const TableRow = ({
  volunteer,
  editVolunteerHandler,
  deleteVolunteerHandler,
  windowWidth,
  updateClicks,
}: Props) => {
  const navigate = useNavigate();

  const showUserDetails = async () => {
    await updateClicks(volunteer.id);
    navigate(`volunteer/${volunteer.id}`, {
      state: { volunteer: volunteer },
    });
  };

  return (
    <>
      {windowWidth > windowBreakpoint ? (
        <tr className="hoverable" onClick={showUserDetails}>
          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="relative h-16 w-16">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src={volunteer.avatar}
                alt=""
              />
              <span
                className={`absolute right-0 bottom-0 h-2 w-2 m-1 rounded-full bg-${
                  volunteer.status ? "green" : "red"
                } ring ring-white`}
              ></span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-white">{volunteer.name}</div>
              <div className="text-gray-400">{volunteer.email}</div>
              <div className="text-gray-400">{volunteer.phone}</div>
            </div>
          </th>
          <td className="px-6 py-4">{volunteer.hero_project}</td>
          <td className="px-6 py-4">
            <div className="star-col flex flex-wrap">
              {ratingStars(volunteer.rating)}
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex justify-end gap-4">
              <button
                x-data="{ tooltip: 'Edite' }"
                onClick={() => editVolunteerHandler(volunteer)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                  x-tooltip="tooltip"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </button>
              <button
                x-data="{ tooltip: 'Delete' }"
                onClick={() => deleteVolunteerHandler(volunteer.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                  x-tooltip="tooltip"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      ) : (
        <tr>
          <div className="max-w-lg mx-auto rounded-lg p-5">
            <div className="relative flex m-auto h-20 w-20">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src={volunteer.avatar}
                alt=""
              />
              <span
                className={`absolute right-0 bottom-0 h-2.5 w-2.5 m-1.5 rounded-full bg-${
                  volunteer.status ? "green" : "red"
                } ring ring-white`}
              ></span>
            </div>
            <h2 className="text-center dark:text-white text-xl font-semibold mt-3">
              {volunteer.name}
            </h2>
            <p className="text-center text-gray-400 mt-1">{volunteer.email}</p>
            <p className="text-center text-gray-400 mt-1">{volunteer.phone}</p>
            <div className="flex justify-center m-4">
              {ratingStars(volunteer.rating)}
            </div>
            <p className="text-center text-gray-400 mt-2">
              Hero Project: {volunteer.hero_project}
            </p>
            <hr className="my-3" />
            <div className="flex place-content-evenly">
              <button
                x-data="{ tooltip: 'Edite' }"
                onClick={() => editVolunteerHandler(volunteer)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                  x-tooltip="tooltip"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              </button>
              <button
                x-data="{ tooltip: 'Delete' }"
                onClick={() => deleteVolunteerHandler(volunteer.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                  x-tooltip="tooltip"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </tr>
      )}
    </>
  );
};

export default TableRow;
