import './React-profile.css';
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile-box">
      <div>
        <img className="profile-image" src={image} alt="User avatar" />
        <p className="user-name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="user-list">
        <li className="user-list-item">
          <span className="list-title">Followers</span>
          <span className="list-sum">{stats.followers}</span>
        </li>
        <li className="user-list-item">
          <span className="list-title">Views</span>
          <span className="list-sum">{stats.views}</span>
        </li>
        <li className="user-list-item">
          <span className="list-title">Likes</span>
          <span className="list-sum">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
