import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface Props {
  title?:string;
  Description?:string;  
  onSubmit? : () => {};
}

const ConfirmationDialog:React.FC <Props> = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const onDelete = () => {
    setIsOpen(false);
    // onSubmit();
    // If anything you want to do OnDelete/OnSubmit it can be done here.
  }

  const closeDialog = () => {
    setIsOpen(false);
  }

  const openDialog = () => {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openDialog}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-80 hover:bg-opacity-50 "
        >
          Click here
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeDialog}
        >
          <div className="px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-40"
              entered="opacity-40"
              leave="ease-in duration-200"
              leaveFrom="opacity-40"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black" />
            </Transition.Child>

            
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 "
              enterTo="opacity-100 "
              leave="ease-in duration-200"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0 "
            >
              <div className="inline-block max-w-md p-6 my-20 overflow-hidden transition transform bg-blue-300 rounded-2xl">
                <Dialog.Title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-auto cursor-pointer hover:bg-gray-300 rounded-full"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={closeDialog}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="max-w-max mx-auto ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-20 w-20 mx-auto "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <h1 className="text-xl font-medium leading-6 text-gray-900">
                      {props.title}
                    </h1>
                  </div>
                </Dialog.Title>

                <div className="mt-5 text-center">
                  <p className="text-base text-gray-700">
                    {props.Description}
                  </p>
                </div>

                <div className="mt-10 flex justify-center space-x-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-400 hover:text-black"
                    onClick={closeDialog}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium bg-red-600 text-gray-200 hover:bg-red-400 hover:text-black rounded"
                    onClick={onDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ConfirmationDialog


ConfirmationDialog.defaultProps = {
  title : "Are you sure?",
  Description : "Do you really want to do this."
}