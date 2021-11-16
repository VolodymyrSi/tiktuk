import { useContext } from 'react';
import { Context } from './App';
import { Link } from 'react-router-dom';

const TrendingFeedItem = ({ trendingFeedServerData }) => {
  const { setCurrentUser, currentUser } = useContext(Context);
  return (
    <div className="bg-dark">
      {trendingFeedServerData.map((data) => (
        <div key={data.id} className="card bg-dark text-light">
          <h2 className="card-title text-center mb-2 ">{data.text}</h2>
          <video
            className="card-img"
            controls
            width={data.videoMeta.width}
            height={data.videoMeta.height}
            src={data.videoUrl}
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded video"
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
          />
          {/* <Link to={'/' + data.authorMeta.nickName}> */}
          <div className="flex-row d-flex justify-content-around align-items-center">
            <Link to={'/' + data.authorMeta.nickName}>
              {' '}
              <div
                className="userData mt-2 mb-2 text-center"
                // onClick={() => setCurrentUser(data.authorMeta.nickName)}
              >
                <img
                  className="rounded"
                  style={{ display: 'inline', width: 60, height: 'auto' }}
                  src={data.authorMeta.avatar}
                  alt={data.authorMeta.nickName}
                />
                <h3 className="text-light">{data.authorMeta.nickName}</h3>
              </div>
            </Link>
            <div className="videoStats text-secondary">
              <h4 className="">{'❤️ Likes: ' + data.diggCount}</h4>
              <h4 className="">{'💭 Comments: ' + data.commentCount}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingFeedItem;
