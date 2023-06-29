import './FeedContents.css'
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";



const FeedContents = () => {
  return (
    <div className="contents">
      <div className="contentWrapper">
        <div className="contentTop">
          <img
            className="contentProfile"
            src="assets/person/Raggeh.jpg"
            alt=""
          />
          <input placeholder="what is your mind " className="contentInput" />
        </div>

        <hr className="contentHr" />
        <div className="contentBottom">
          <div className="contentOptions">
            <div className="contentOption">
              <PermMediaIcon htmlColor="tomato" className="contentIcon" />
              <span className="contentOptionText"> Photo / Video </span>
            </div>
            <div className="contentOption">
              <LabelIcon htmlColor="blue" className="contentIcon" />
              <span className="contentOptionText"> Tag </span>
            </div>
            <div className="contentOption">
              <LocationOnIcon htmlColor="green" className="contentIcon" />
              <span className="contentOptionText"> Location </span>
            </div>
            <div className="contentOption">
              <EmojiEmotionsIcon htmlColor="gold" className="contentIcon" />
              <span className="contentOptionText"> Feelings </span>
            </div>

            <button className='shareButton'> Share </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedContents