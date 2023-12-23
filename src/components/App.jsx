import './app.css';
import user from '../data/user.json';
import data from '../data/data.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;


export const App = () => {
  return (
    <div className="divWrap">
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>

  );
};
