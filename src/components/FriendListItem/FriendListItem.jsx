import styles from './FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img
        className={styles.friendsImage}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles.friendsName}>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
export default FriendListItem;
