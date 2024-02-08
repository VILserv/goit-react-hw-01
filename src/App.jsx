import './App.css';
import Profile from './components/profile/React-profile';
import FriendList from './components/friendlist/React-friendList';
import TransactionHistory from './components/transactionhistory/React-transactionHistory';
import userData from './userData.json';
import { friends } from './friends.json';
import { transactions } from './transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
