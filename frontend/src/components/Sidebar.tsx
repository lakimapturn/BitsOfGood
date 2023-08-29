import { Dispatch, FC, SetStateAction, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import AddEditUser from "./AddEditUser";
import User from "../models/User";

interface Props {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  addVolunteer: Function;
  selectedUser: User | null;
  editVolunteer: Function;
}

const Sidebar = ({
  showSidebar,
  setShowSidebar,
  addVolunteer,
  selectedUser,
  editVolunteer,
}: Props) => {
  return (
    <Transition.Root show={showSidebar} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowSidebar}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setShowSidebar(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex bg-gray-900 text-white h-full flex-col overflow-y-scroll bg-white pb-4 shadow-xl">
                    <div className="px-4 sm:px-6 pt-6 pb-4">
                      <Dialog.Title className="text-base font-semibold text-3xl">
                        {selectedUser ? "Edit" : "Add"} Volunteer
                      </Dialog.Title>
                    </div>
                    <hr />
                    <div className="relative flex-1 px-4 sm:px-6">
                      <AddEditUser
                        editVolunteer={editVolunteer}
                        selectedUser={selectedUser}
                        addVolunteer={addVolunteer}
                        closeSidebar={() => setShowSidebar(false)}
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Sidebar;
