import  './Rightbar.css';
import { Users } from "../../TestData";
import Online from '../Online/Online';

const Rightbar = ({profile}) => {

  const HomeRightBar = () => {
    return (
      <> 
      <div className="bdContainer">
          <img src="assets/gift.png" className="hbdImg" alt="" />
          <span className="bdText">
            <b> Hassan Aweys </b> and <b> 3 other friends </b> have a birthday
            today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="adImg" />
        <h4 className="rightbarTitle"> Online Friends </h4>
        <ul className="onlineFriendList">
        
        {Users.map(u=>(
          <Online key={u.id} user={u} />
        ))}
         
        </ul>
      </>
    )
  };




  return (
    <div className="rightbar">
      <div className="sidebarWrapper">
        <HomeRightBar />
      </div>
    </div>
  );
}

export default Rightbar