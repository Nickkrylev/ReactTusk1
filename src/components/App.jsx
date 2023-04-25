import React from 'react';
import { Profile } from './Profile.jsx';
import user from 'path/to/user.json';
export const App = () => {
  return (
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  );
};
