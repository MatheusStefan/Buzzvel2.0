import React, { useContext } from "react";
import { useModal } from "../../Context/ModalContext";
import { ThemeContext } from "../../Context/ThemeContext";

const ModalForm: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const { theme } = useContext(ThemeContext);

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div
        className={`${
          theme === "dark" ? "bg-white" : "bg-black"
        } p-8 rounded shadow-lg z-60 max-w-md mx-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          className={`${
            theme === "dark" ? "text-purple" : "text-mid-yellow"
          } text-xl font-bold mb-4`}
        >
          Request a Quote
        </h2>
        <form
          id="form"
          onSubmit={(e) => {
            e.preventDefault();
            closeModal();
          }}
        >
          <label
            className={`${
              theme === "dark" ? "text-purple" : "text-mid-yellow"
            } block mb-2`}
          >
            Name:
            <input
              type="text"
              name="name"
              required
              className="border p-2 w-full mt-1"
            />
          </label>
          <label
            className={`${
              theme === "dark" ? "text-purple" : "text-mid-yellow"
            } block mb-2`}
          >
            Email:
            <input
              type="email"
              name="email"
              required
              className="border p-2 w-full mt-1"
            />
          </label>
          <div className="mt-4 flex justify-end space-x-2">
            <button type="submit" className="bg-black text-white p-2 rounded">
              Submit
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-black p-2 text-white rounded"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
