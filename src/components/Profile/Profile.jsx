import styles from './Profile.module.css';
const Profile = ({
  name = 'Unknown',
  tag = 'unknown',
  location = 'unknown',
  image,
  stats = {},
}) => {
  const { followers = 0, views = 0, likes = 0 } = stats;

  return (
    <div className={styles.profileBox}>
      <div>
        <img className={styles.profileImage} src={image} alt="User avatar" />
        <p className={styles.userName}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.userList}>
        <li className={styles.userListItem}>
          <span className={styles.listTitle}>Followers</span>
          <span className={styles.listSum}>{followers}</span>
        </li>
        <li className={styles.userListItem}>
          <span className={styles.listTitle}>Views</span>
          <span className={styles.listSum}>{views}</span>
        </li>
        <li className={styles.userListItem}>
          <span className={styles.listTitle}>Likes</span>
          <span className={styles.listSum}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
