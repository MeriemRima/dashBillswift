import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image:string | StaticImageData; 
  title: string;
  description: string;
  rating: number;
  reviews: number;
}

const CardApps: React.FC<CardProps> = ({ image, title, description, rating, reviews }) => {
  return (
    <div className="w-64 bg-white p-4 shadow-md rounded-lg flex flex-col items-start">
      <Image src={image} alt={title} className="w-12 h-12 mb-4" />
      <h5 className="font-semibold text-lg truncate">{title}</h5>
      <p className="text-sm text-gray-600 mt-2 break-words">{description}</p>
      <div className="flex items-center mt-4">
        <span className="text-orange-400">{'★'.repeat(rating)}</span>
        <span className="text-gray-500 ml-2 text-sm">({reviews})</span>
      </div>
    </div>
  );
};

export default CardApps;
