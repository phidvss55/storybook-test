import React from "react";

const InputList: React.FC = () => {
  return (
    <div className="bg-teal-200">
      <div className="w-full h-[1px] bg-gray-500 mt-4" />
      <input type="text" className="!border !border-red-200 w-full px-2" />
      <p>This is a text</p>
      <p>This is a text</p>
    </div>
  );
};

export default InputList;
