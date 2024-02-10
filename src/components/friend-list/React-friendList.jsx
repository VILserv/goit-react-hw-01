import styles from './React-friendList.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img
        className={styles['friends-image']}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles['friends-name']}>{name}</p>
      <p className={isOnline ? styles['online'] : styles['offline']}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friends-list']}>
      {friends.map(friend => (
        <li className={styles['friends-item']} key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
