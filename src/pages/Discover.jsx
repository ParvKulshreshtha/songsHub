import { useEffect, useState } from "react";
import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { getTracks } from "../redux/services/SongsApi";


const Discover = () => {
    const [tracks, setTracks] = useState({})
    const [playMusic, setPlayMusic] = useState("")
    useEffect(() => {
        feedSongsToData()
    },[])

    const feedSongsToData = async() => {
        const response = await getTracks()
        setTracks(response.tracks);
        console.log(tracks);
    }

    const playSongHandler = (song) => {
        console.log(tracks.find(item => item.key==song.key));
        setPlayMusic(playMusic==song.key?"":song.key)
    }

    const genreTitle = "Pop"
    return(
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center mt-4 mb-10 sm:flex-row flex-col">
                <h2 className="text-white text-3xl font-bold text-left">Discover</h2>
                <select 
                    value={""}
                    className="bg-black border-none border-rounded-lg text-sm outline-none text-white p-3 sm:mt-0 mt-5"
                >
                    {genres.map(genre => 
                        <option key={genre.value}>{genre.title}</option>)}
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {tracks.length?tracks.map((song,index) => (
                    <SongCard 
                        key={song.key}
                        playSongHandler={playSongHandler}
                        playMusic={playMusic}
                        song={song}
                        i={index}/>
                )):<Loader />}
            </div>            
        </div>
    )
}

export default Discover;
