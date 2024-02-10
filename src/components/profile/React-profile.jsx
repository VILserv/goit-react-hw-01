import styles from './React-profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles['profile-box']}>
      <div>
        <img
          className={styles['profile-image']}
          src={image}
          alt="User avatar"
        />
        <p className={styles['user-name']}>{name}</p>
        <p className={styles["tag"]}>@{tag}</p>
        <p className={styles["location"]}>{location}</p>
      </div>

      <ul className={styles['user-list']}>
        <li className={styles['user-list-item']}>
          <span className={styles['list-title']}>Followers</span>
          <span className={styles['list-sum']}>{stats.followers}</span>
        </li>
        <li className={styles['user-list-item']}>
          <span className={styles['list-title']}>Views</span>
          <span className={styles['list-sum']}>{stats.views}</span>
        </li>
        <li className={styles['user-list-item']}>
          <span className={styles['list-title']}>Likes</span>
          <span className={styles['list-sum']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
