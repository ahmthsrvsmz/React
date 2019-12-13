import React, { useState } from 'react';
import axios from 'axios';
import FriendProfile from './FriendProfile';
import Button from './Button';

function Friend() {
  const [friend, setFriend] = useState([]);
  const getFriend = async () => {
    const result = await axios.get('https://www.randomuser.me/api?results=1');
    const user = await result.data;

    return user.results[0];
  };
  const handleClick = async e => {
    e.preventDefault();
    const user = await getFriend();
    setFriend([user]);
  };
  return (
    <div>
      <Button data={handleClick} />
      {friend.length > 0 ? <FriendProfile data={friend} /> : <h4>Press Button</h4>}
    </div>
  );
}

export default Friend;