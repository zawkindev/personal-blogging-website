import React from "react";

interface TagProps {
  title: string;
}

const Tag: React.FC<TagProps> = ({ title }) => {
  return (
    <div className="font-[JetBrainsMono] font-medium bg-black-100 px-1 rounded-sm hover:text-white hover:cursor-pointer hover:bg-black-600">
      #{title}
    </div>
  );
};

export default Tag;
