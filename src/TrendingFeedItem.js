import { useContext } from 'react';
import { Context } from './App';

const TrendingFeedItem = ({ trendingFeedServerData }) => {
  const { setCurrentUser } = useContext(Context);
  return (
    <div>
      <p>I am a video feed item</p>
      {trendingFeedServerData.map((data) => (
        <div key={data.id}>
          <h2>{data.text}</h2>
          <iframe
            width={data.videoMeta.width}
            height={data.videoMeta.height}
            src={data.videoUrl}
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded video"
          />
          <div
            className="userData"
            onClick={() => setCurrentUser(data.authorMeta.nickName)}
          >
            <img src={data.authorMeta.avatar} alt={data.authorMeta.nickName} />
            <p>{data.authorMeta.nickName}</p>
          </div>
          <div className="videoStats">
            <p>{'liked' + data.diggCount + 'time(s)'}</p>
            <p>{data.commentCount + 'comments'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingFeedItem;
