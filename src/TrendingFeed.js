import { useState, useEffect, useContext } from 'react';
import { Context } from './App';
import TrendingFeedItem from './TrendingFeedItem';

const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'https://tiktok33.p.rapidapi.com/trending/feed',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
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
  const { setIsLoading } = useContext(Context);
  const [trendingFeedServerData, setTrendingFeedServerData] = useState([]);

  useEffect(() => {
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
