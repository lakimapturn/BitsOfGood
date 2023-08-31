import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import User, { emptyUser } from "../models/User";
import Route from "../models/Route";
import { ratingStars } from "../utils/functions";
import Breadcrumbs from "../components/Breadcrumbs";

const VolunteerInfo: FC = (props) => {
  const params = useParams();

  const [volunteer, setVolunteer] = useState<User>(emptyUser);

  const routes: Route[] = [
    {
      name: "Volunteer Information",
      path: `/volunteer/${volunteer.id}`,
    },
  ];

  useEffect(() => {
    fetchVolunteer();
  }, [props]);

  const fetchVolunteer = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/bog/users/${params.id}`
      );
      console.log(response);
      setVolunteer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center py-16 px-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-gray-900 shadow-xl m-auto p-2 lg:p-4 text-white relative md:text-left">
        <div className="flex">
          <Breadcrumbs routes={routes} />
        </div>
        <hr />
        <div className="p-8 lg:p-16 mx-auto">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={volunteer.avatar}
                  className="avatar m-auto rounded-full relative z-10"
                  alt=""
                />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl">
                  {volunteer.name}
                </h1>
                <hr className="mb-5" />
                <p className="text-sm">Email: {volunteer.email}</p>
                <p className="text-sm">Phone: {volunteer.phone}</p>
                <p className="text-sm">
                  Hero Project: {volunteer.hero_project}
                </p>
                <p className="text-sm">Notes: {volunteer.notes}</p>
                <p className="text-sm">Times Clicked: {volunteer.clicks}</p>
              </div>
              <div className="flex align-bottom mr-5">
                {ratingStars(volunteer.rating, 40)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerInfo;
