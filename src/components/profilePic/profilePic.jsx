import "./profilePic.css";

// https://unavatar.io/#/
function ProfilePic(props) {
  return (
    <>
      <img
        src={`https://unavatar.io/${props.srvice}/${props.userName}`}
        alt=""
        className="profile-img"
      />
    </>
  );
}

export default ProfilePic;
