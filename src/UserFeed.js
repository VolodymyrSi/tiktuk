import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from './App';
import VideoFeedItem from './VideoFeedItem';
import UserInfo from './UserInfo';

const axios = require('axios').default;

const getUserInfoData = (currentUser) =>
  axios
    .request({
      method: 'GET',
      url: `https://tiktok33.p.rapidapi.com/user/info/${currentUser}`,
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

const UserFeed = () => {
  const { currentUser } = useContext(Context);
  const params = useParams();
  const [userDataServerData, setUserDataServerData] = useState({});

  const [dummyUserData, setDummyUserData] = useState([]);

  useEffect(() => {
    axios
      .get('./user-feed.json')
      .then((res) => {
        console.log(res.data.itemList);
        setDummyUserData(res.data.itemList);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(params.currentUser);
    if (params.currentUser) {
      getUserInfoData(params.currentUser).then((userInfoData) => {
        setUserDataServerData(userInfoData);
      });
    }
  }, [params]);

  return (
    <div>
      <div>
        <p>This is info about user</p>
      </div>
      <UserInfo {...userDataServerData} />
      {dummyUserData && <VideoFeedItem userFeedServerData={dummyUserData} />}
      <p>I am user feed</p>
    </div>
  );
};

export default UserFeed;
