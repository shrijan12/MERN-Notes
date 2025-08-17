import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { IoMdAdd } from "react-icons/io";

const Home = () => {
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

      <button className="w-16 h-16 flex items-center justify-center rounded-3xl bg-blue-700 absolute right-10 bottom-10">
        <IoMdAdd className="text-white font-bold size-[22px]" />
      </button>
    </>
  );
};

export default Home;
