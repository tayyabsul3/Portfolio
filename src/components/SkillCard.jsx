import React from "react";

const SkillCard = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-950/25  hover:shadow-2xl hover:scale-105 transition-all duration-200 hover:border-white border-2 border-transparent p-6 rounded-lg shadow-lg">
      {children}
    </div>
  );
};

export default SkillCard;
