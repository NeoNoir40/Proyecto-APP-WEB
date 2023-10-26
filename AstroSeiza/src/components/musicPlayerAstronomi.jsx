import music from "../assets/audio/HaydenFolkerAdrift.mp3";
export default function AstroSong() {
  return (
    <div className="justify-end  flex items-end mt-10">
      <audio controls autoplay loop>
        <source src={music} type="audio/mpeg" />
      </audio>
    </div>
  );
}
