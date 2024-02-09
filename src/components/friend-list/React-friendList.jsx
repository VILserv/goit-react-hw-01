import './React-friendList.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className="friends-image" src={avatar} alt="Avatar" width="48" />
      <p className="friends-name">{name}</p>
      <p className={isOnline ? 'online' : 'offline'}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friends-list">
      {friends.map(friend => (
        <li className="friends-item" key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
