import './Online.css';

const Online = ({user}) => {
  return (
  
      <li className="onlineFriend">
        <div className="friendProfileContainer">
          <img className="onlineProflieImg" src={user.profilePicture} alt="" />
          <span className="onlineFriends"> </span>
        </div>

        <span className="onlineUsername"> {user.username} </span>
      </li>
    
  );
}

export default Online