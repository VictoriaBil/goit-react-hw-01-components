import user from 'data/user';
import Profile from './Profile/Profile';
import data from 'data/data';
import { Statistics } from './Statistics/Statistics';
import friends from 'data/friends';
import { FriendList } from './FriendList/FriendList';
import transactions from 'data/transactions';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
