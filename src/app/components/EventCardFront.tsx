
import React from 'react';

interface EventCardFrontProps {
  imagePath: string;
}

const EventCardFront: React.FC<EventCardFrontProps> = ({ imagePath }) => {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden group/card relative bg-[#0a0a0f]">
      <img
        src={imagePath}
        alt="Event Poster"
        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
      />
      {/* Subtle overlay to maintain depth */}
      <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors duration-500" />
    </div>
  );
};

export default EventCardFront;
