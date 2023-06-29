import './Topbar.css';
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

const Tobar = () => {
  return (
    <div className='topbar__container'>
      <div className="topbarLeft">
        <span className='logo'> Social-App </span>
      </div>
      <div className="topbarCenter">

        <div className='searchbar'>
        <SearchIcon className='searchIcon' />
        <input placeholder="Search for friend, post, or any video" className="searchInput" />
      </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">5</span>
          </div>
          <div className="topbarIconItem">
            <CircleNotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/Raggeh.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default Tobar