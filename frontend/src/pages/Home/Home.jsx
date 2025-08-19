import React, { useState } from "react";
import Navbar from "./../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { IoMdAdd } from "react-icons/io";
import AddEditNotes from "../Home/AddEditNotes.jsx";
import Modal from "react-modal";

const Home = () => {
  const [addEditModal, setAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const onClose = () => {
    setAddEditModal({
      isShown: false,
      type: "add",
      data: null,
    });
  };

  return (
    <>
      <Navbar />

      {/* Till here all the navigation section ends */}

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-3 mt-8">
          <NoteCard
            title="Meeting"
            date="3rd of April"
            content="Hey There my name is shrijan, the don of fon"
            tags="#shrijan"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-3xl bg-blue-700 absolute right-10 bottom-10"
        onClick={() => {
          setAddEditModal({
            isShown: true,
            type: "add",
            data: null,
          });
        }}
      >
        <IoMdAdd className="text-white font-bold size-[22px]" />
      </button>

      <Modal
        isOpen={addEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className=" w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll-hidden"
        ariaHideApp={false}
      >
        <AddEditNotes
          onClose={onClose}
          type={addEditModal.type}
          noteData={addEditModal.data}
        />
      </Modal>
    </>
  );
};

export default Home;
