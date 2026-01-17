
import React from 'react';

interface EventCardFrontProps {
  imagePath: string;
  terminalPath: string;
}

const EventCardFront: React.FC<EventCardFrontProps> = ({ imagePath, terminalPath }) => {
  return (
    <div className="h-full rounded-lg bg-[#0a0a0f] border border-[#00d4ff]/30 overflow-hidden flex flex-col group/card transition-all duration-500 hover:border-[#00d4ff]/60">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00d4ff]/20 bg-[#00d4ff]/5">
        <div className="w-2 h-2 rounded-full bg-[#f43f5e]"></div>
        <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
        <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
        <div className="font-mono text-xs text-[#00d4ff] ml-2">
          <span className="text-[#00ffff]">$</span> {terminalPath}
        </div>
      </div>
      
      {/* Image Container */}
      <div className="flex-1 p-2  flex items-center justify-center bg-[#0a0a0f] overflow-hidden">
        <div className="relative w-full h-full overflow-hidden rounded-lg border border-[#00d4ff]/10 bg-[#000]/40">
          <img
            src={imagePath}
            alt="Event Preview"
            // TODO: change image size to fix its height or change event card height or change image aspect ratio
            className="w-full h-full object-cover opacity-80 scale-95 transition-all duration-700 group-hover/card:scale-105 group-hover/card:opacity-100"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent"></div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#00d4ff]/40 m-2"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#00d4ff]/40 m-2"></div>
        </div>
      </div>
    </div>
  );
};

export default EventCardFront;
