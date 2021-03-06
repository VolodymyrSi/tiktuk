import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../App';
import TrendingFeedItem from '../components/TrendingFeedItem';
import { userApi } from '../api-config/api';

const options = {
  method: 'GET',
  url: 'https://tiktok33.p.rapidapi.com/trending/feed',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': userApi
  }
};

const getTrendingFeedData = () =>
  axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

const TrendingFeed = () => {
  const { setIsLoading, isLoading } = useContext(Context);
  const [trendingFeedServerData, setTrendingFeedServerData] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    getTrendingFeedData().then((trendingFeedData) => {
      setTrendingFeedServerData(trendingFeedData);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <TrendingFeedItem trendingFeedServerData={trendingFeedServerData} />
    </div>
  );
};

export default TrendingFeed;
