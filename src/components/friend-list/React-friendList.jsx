import styles from './React-friendList.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
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

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(friend => (
        <li className={styles.friendsItem} key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
