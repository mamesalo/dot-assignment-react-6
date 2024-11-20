import React, { useState } from "react";

const UserCard = ({ id, name, age, onSave }) => {
  const [isEdit, setisEdit] = useState(false);
  const [editedName, seteditedName] = useState(name);
  const [editAge, seteditAge] = useState(age);
  return (
    <div className="flex flex-col gap-2 border-2 rounded p-4">
      <div className="flex gap-2 items-center">
        <label className="w-14">Name</label>
        <input
          disabled={!isEdit}
          type="text"
          className={`border-2 py-1 px-3  outline-none disabled:bg-transparent ${
            isEdit
              ? `outline-none rounded border-gray-900`
              : `border-transparent`
          }`}
          placeholder="Enter name"
          value={editedName}
          onChange={(e) => seteditedName(e.target.value)}
        />
      </div>
      <div className="flex gap-2 items-center">
        <label className="w-14">Age</label>
        <input
          disabled={!isEdit}
          type="number"
          className={`border-2 py-1 px-3  outline-none disabled:bg-transparent ${
            isEdit
              ? `outline-none rounded border-gray-900`
              : `border-transparent`
          }`}
          placeholder="Enter age"
          onChange={(e) => seteditAge(e.target.value)}
          value={editAge}
        />
      </div>

      <div className="flex gap-2">
        <button
          className={`p-2 border-2 w-full ${
            isEdit
              ? `border-red-500 rounded-lg bg-red-500 hover:bg-red-600 text-white`
              : `border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white`
          }`}
          onClick={() => {
            setisEdit(!isEdit);
            seteditedName(name);
            seteditAge(age);
          }}
        >
          {isEdit ? "Discard" : "Edit"}
        </button>
        {isEdit && (
          <button
            className="p-2 border-2 w-full border-blue-500 rounded-lg hover:bg-blue-600 bg-blue-500 text-white"
            onClick={() => {
              onSave(editedName, editAge, id);
              setisEdit(false);
            }}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
