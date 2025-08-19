import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag != tagToRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="flex items-center gap-0.5 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded"
              >
                #{tag}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="cursor-pointer"
                >
                  <MdClose />
                </button>
              </span>
            );
          })}
        </div>
      )}
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          className="text-sm px-3 py-2 outline-none bg-slate-50"
          placeholder="Add tags"
        />
        <button
          className="w-8 h-8 flex items-center justify-center border border-blue-700 rounded hover:bg-blue-800"
          onClick={() => {
            addNewTag();
          }}
        >
          <MdAdd className="text-2xl text-blue-500 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
