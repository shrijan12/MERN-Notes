import React from "react";
import { MdPushPin } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
        <MdPushPin
          size={22}
          className={`ico-btn ${isPinned ? "text-blue-700" : "text-slate-600"}`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-sm text-slate-600 mt-2">{content?.slice(0, 60)}</p>
      <div className=" flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">{tags}</div>
        <div className="flex items-center gap-2">
          <FaEdit className="hover:text-green-700" size={22} onClick={onEdit} />
          <MdDeleteForever
            className="hover:text-red-600"
            onClick={onDelete}
            size={22}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
