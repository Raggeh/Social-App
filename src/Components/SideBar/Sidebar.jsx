import  './Sidebar.css'
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";

import { Users } from "../../TestData";
import Closefriend from '../Closefriend/Closefriend';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcons" />
            <span className="sidebarListItemText"> Feed </span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcons" />
            <span className="sidebarListItemText"> Chats </span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleIcon className="sidebarIcons" />
            <span className="sidebarListItemText"> Videos </span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcons" />
            <span className="sidebarListItemText"> Groups </span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcons" />
            <span className="sidebarListItemText"> Bookmarks </span>
          </li>
          <li className="sidebarListItem">
            <HelpIcon className="sidebarIcons" />
            <span className="sidebarListItemText"> Questions </span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcons" />
            <span className="sidebarListItemText"> Jobs </span>
          </li>
          <li className="sidebarListItem">
            <EventIcon className="sidebarIcons" />
            <span className="sidebarListItemText"> Evens </span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcons" />
            <span className="sidebarListItemText"> Courses </span>
          </li>
        </ul>
        <button className="sidebarButton"> Show More </button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
         
        {Users.map(u =>(
            <Closefriend key={u.id} user={u} />
        ))}
        
        </ul>
      </div>
    </div>
  );
}

export default Sidebar