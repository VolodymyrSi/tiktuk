import { useState, useEffect, useContext } from 'react';
import { Context } from './App';
import VideoFeedItem from './VideoFeedItem';
import UserInfo from './UserInfo';

const axios = require('axios').default;

// const optionUserFeed = {
//   method: 'GET',
//   //   url: 'https://tiktok33.p.rapidapi.com/user/feed/dave.xp',
//   url: `https://tiktok33.p.rapidapi.com/user/feed/${currentUser}`,
//   headers: {
//     'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
//     'x-rapidapi-key': '22a63312d2msha59bc2074f8e5bep1ac1f0jsn985426636d60'
//   }
// };

const getUserFeedData = (currentUser) =>
  axios
    .request({
      method: 'GET',
      //   url: 'https://tiktok33.p.rapidapi.com/user/feed/dave.xp',
      url: `https://tiktok33.p.rapidapi.com/user/feed/${currentUser}`,
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': '22a63312d2msha59bc2074f8e5bep1ac1f0jsn985426636d60'
      }
    })
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

// const optionsUserInfo = {
//   method: 'GET',
//   //   url: 'https://tiktok33.p.rapidapi.com/user/info/dave.xp',
//   url: `https://tiktok33.p.rapidapi.com/user/info/${currentUser}`,
//   headers: {
//     'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
//     'x-rapidapi-key': '22a63312d2msha59bc2074f8e5bep1ac1f0jsn985426636d60'
//   }
// };

const getUserInfoData = (currentUser) =>
  axios
    .request({
      method: 'GET',
      //   url: 'https://tiktok33.p.rapidapi.com/user/info/dave.xp',
      url: `https://tiktok33.p.rapidapi.com/user/info/${currentUser}`,
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': '22a63312d2msha59bc2074f8e5bep1ac1f0jsn985426636d60'
      }
    })
    .then(function (response) {
      // console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

const UserFeed = () => {
  const {currentUser} = useContext(Context);
  const [userFeedServerData, setUserFeedServerData] = useState([]);
  const [userDataServerData, setUserDataServerData] = useState({});

  useEffect(() => {
    getUserFeedData(currentUser).then((userFeedData) => {
      setUserFeedServerData(userFeedData);
    });
  }, [currentUser]);

  useEffect(() => {
    getUserInfoData(currentUser).then((userInfoData) => {
      setUserDataServerData(userInfoData);
    });
  }, [currentUser]);

  return (
    <div>
      <div>
        <p>This is info about user</p>
      </div>
      <UserInfo {...userDataServerData} />
      <VideoFeedItem userFeedServerData={userFeedServerData} />
      <p>I am user feed</p>
    </div>
  );
};

export default UserFeed;
