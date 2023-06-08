import MicIcon from "@mui/icons-material/Mic";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function ChatFotter() {
  return (
    <div className="h-[50px]  w-full flex justify-center items-center">
      <div className="h-[80%] bg-gray-100 w-[90%] rounded-3xl flex">
        <div className="w-10   rounded-l-3xl h-full flex justify-center text-gray-400 items-center">
          <button>
            <MicIcon />
          </button>
        </div>
        <div className="w-[490px] bg-black h-full">
          <input
            type="text"
            className="h-full flex justify-center items-center text-gray-400 bg-gray-100 w-full"
          />
        </div>
        <div className="w-10  flex justify-center items-center text-gray-400  h-full">
          <button>
            <PhotoLibraryIcon />
          </button>
        </div>
        <div className="w-10   flex justify-center items-center text-gray-400  h-full">
          <button>
            <SentimentSatisfiedAltIcon />
          </button>
        </div>
        <div className="w-10   flex justify-center items-center text-gray-400  h-full">
          <button>
            <SendIcon />
          </button>
        </div>
        <div className="w-10   rounded-r-3xl flex justify-center items-center text-gray-400 h-full">
          <button>
            <LocationOnIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
