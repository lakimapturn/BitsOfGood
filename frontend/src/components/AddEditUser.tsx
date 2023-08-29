import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import User, { NewUser } from "../models/User";

interface Props {
  editVolunteer: User | null;
  addVolunteer: Function;
}

const AddEditUser = ({ editVolunteer, addVolunteer }: Props) => {
  const [rating, setRating] = useState<number>(
    editVolunteer ? parseInt(editVolunteer.rating) : 0
  );

  const addUserHandler = async (event: any) => {
    event.preventDefault();
    const data: NewUser = {
      name: event.target.name.defaultValue,
      avatar: event.target.avatar.defaultValue,
      hero_project: event.target.hero_project.defaultValue,
      notes: event.target.notes.defaultValue,
      email: event.target.email.defaultValue,
      phone: event.target.phone.defaultValue,
      rating: event.target.rating.defaultValue,
      status: event.target.status.defaultValue === "on",
    };

    addVolunteer(data);
  };

  return (
    <form onSubmit={(event) => addUserHandler(event)}>
      <div className="space-y-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="Name"
                  id="name"
                  defaultValue={editVolunteer ? editVolunteer.name : ""}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full flex">
            <div className="col-auto mr-3">
              <label
                htmlFor="avatar"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Avatar Link
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="url"
                    name="avatar"
                    id="avatar"
                    defaultValue={editVolunteer ? editVolunteer.avatar : ""}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="https://"
                  />
                </div>
              </div>
            </div>
            <div className="col-auto ml-3">
              <label
                htmlFor="status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Status
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <div className="flex sm:max-w-md">
                  <input
                    type="checkbox"
                    name="status"
                    id="status"
                    defaultChecked={editVolunteer?.status}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="hero_project"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Hero Project
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="hero_project"
                  id="hero_project"
                  defaultValue={editVolunteer ? editVolunteer.hero_project : ""}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={editVolunteer ? editVolunteer.email : ""}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                  +1
                </span>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  defaultValue={editVolunteer ? editVolunteer.phone : ""}
                  pattern="[0-9]{10}"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="notes"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Notes
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  defaultValue={editVolunteer ? editVolunteer.notes : ""}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="rating"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Rating
            </label>
            <div className="mt-2">
              <div className="flex sm:max-w-md">
                <input
                  type="range"
                  name="rating"
                  id="rating"
                  value={rating}
                  min={0}
                  max={10}
                  onInput={(event) =>
                    setRating(
                      parseInt((event.target as HTMLInputElement).value)
                    )
                  }
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
                <p className="ml-4">{rating}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full text-center">
          <button
            className="group relative h-12 w-24 overflow-hidden rounded-2xl bg-green-500 text-md text-white"
            type="submit"
          >
            {editVolunteer ? "Edit" : "Add"} User
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddEditUser;
