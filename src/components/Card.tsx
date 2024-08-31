import React from "react";
import Tag from "./Tag";

interface CardProps {
  title: string;
  tags: string[];
  date: string;
}

const Card: React.FC<CardProps> = ({ title, tags, date }) => {
  return (
    <div className="w-[700px] bg-black-300 flex flex-col p-4 gap-4 rounded-lg hover:bg-black-50 hover:cursor-pointer">
      <div className="flex justify-between text-gray-400">
        <div className="flex gap-3">
          {tags.map((tag, index) => {
            return <Tag title={tag} key={index} />;
          })}
        </div>
        <p>{date}</p>
      </div>
      <p className="text-2xl break-word">{title}</p>
    </div>
  );
};

export default Card;
