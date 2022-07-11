import ProfilePic from "../components/ProfilePic";
import LogoutIco from "../images/logout.svg";

import '../css/Profile.css';

const Profile = () => {
    return (
        <div className="Profile">
            <ProfilePic/>
            <h4>Fortune Alayo</h4>
            <span>Super Admin</span>

            <span id="logout">Log Out <img src={LogoutIco} /></span>
        </div>
    )
}

export default Profile;