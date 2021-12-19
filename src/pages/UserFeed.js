import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Context } from '../App';
import VideoFeedItem from '../components/UserFeedItem';
import UserInfo from '../components/UserInfo';
import { userApi } from '../api-config/api';

const getUserInfoData = (currentUser) => {
  console.log(currentUser);
  return axios
    .request({
      method: 'GET',
      url: `https://tiktok33.p.rapidapi.com/user/info/${currentUser}`,
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': userApi
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const UserFeed = () => {
  const MAX_POSTS = 29;

  const { setIsLoading, isLoading } = useContext(Context);
  const params = useParams();

  const [userDataServerData, setUserDataServerData] = useState({});
  const [dummyUserData, setDummyUserData] = useState([]);

  useEffect(() => {
    axios
      .get('./user-feed.json')
      .then((res) => {
        setDummyUserData(res.data.itemList);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (params.currentUser) {
      getUserInfoData(params.currentUser).then((userInfoData) => {
        setUserDataServerData(userInfoData);
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line
  }, [params]);

  return (
    <div>
      <UserInfo {...userDataServerData} />
      {dummyUserData && (
        <VideoFeedItem userFeedServerData={dummyUserData.slice(0, MAX_POSTS)} />
      )}
    </div>
  );
};

export default UserFeed;
