import './Closefriend.css';

const Closefriend = ({user}) => {
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className='sidebarName' > {user.username} </span>
    </li>
  );
}

export default Closefriend