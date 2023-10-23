import Player from "@madzadev/audio-player";
import music from "../assets/audio/HaydenFolkerAdrift.mp3";
export default function AstroSong() {
//   const tracks = [
//     {
//       url: music,
//       title: "Madza - Chords of Life",
//       tags: ["BackgroundSound"],
//     },
//   ];
  return (
    <div className="justify-end  flex items-end mt-10">
      {/* <div className="p-10 h-[200px]  w-[500px] ">
        <Player trackList={tracks} />
      </div> */}
    <audio controls autoplay loop>
        <source src={music} type="audio/mpeg"/>
    </audio>
    </div>
  );
}
