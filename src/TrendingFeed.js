import { useState, useEffect } from 'react';
import TrendingFeedItem from './TrendingFeedItem';

const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'https://tiktok33.p.rapidapi.com/trending/feed',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': '22a63312d2msha59bc2074f8e5bep1ac1f0jsn985426636d60'
  }
};

const getTrendingFeedData = () =>
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

const TrendingFeed = () => {
  const [trendingFeedServerData, setTrendingFeedServerData] = useState([]);

  useEffect(() => {
    getTrendingFeedData().then((trendingFeedData) => {
        setTrendingFeedServerData(trendingFeedData);
    });
  }, []);

  return <div>
      <TrendingFeedItem trendingFeedServerData={trendingFeedServerData}/>
  </div>;
};

export default TrendingFeed;
