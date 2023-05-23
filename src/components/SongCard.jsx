import { BsPlayFill } from 'react-icons/bs';

import { useState } from "react";

const SongCard = ({song, playSongHandler, playMusic}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return(
  <div>
    <div className="rounded-full bg-[#00000029]">
      {isHovering && <BsPlayFill className='bg-[#ffffff79] sm:w-4 w-0 rounded-full absolute mt-12 ml-12'/>}
      <img onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut} className={`w-28 p-3 rounded-full opacity-100 ${song.key==playMusic && "rotate-animation"}`}
          onClick={() => playSongHandler(song)}
          src={song.images.coverart} alt="" />
    </div>
    <div className="w-28 text-[yellow] font-bold text-xs song-title text-center">
      {song.title}  
    </div>
    <div className="w-28 text-white text-xs text-center mt-3">
      {song.subtitle}  
    </div>
  </div>)
};

export default SongCard;
