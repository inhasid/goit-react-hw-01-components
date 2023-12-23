import './app.css';
import user from '../data/user.json';
import Profile from './Profile/Profile';

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
    </div>

  );
};
