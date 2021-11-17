// import { useContext } from 'react';
// import { Context } from './App';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../utils/Helper';

const TrendingFeedItem = ({ trendingFeedServerData }) => {
  // const { setCurrentUser, currentUser } = useContext(Context);
  return (
    <div className="bg-dark">
      {trendingFeedServerData.map((data) => (
        <div
          key={data.id}
          className="card bg-dark text-light flex-lg-row flex-md-row flex-sm-column"
        >
          <video
            className="m-5"
            controls
            width={data.videoMeta.width}
            height={data.videoMeta.height}
            src={data.videoUrl}
            frameBorder="0"
            allowFullScreen
            title="Embedded video"
            onMouseOver={(event) => {
              event.target.muted = true;
              event.target.play();
            }}
            onMouseOut={(event) => event.target.pause()}
          />
          {/* <Link to={'/' + data.authorMeta.nickName}> */}
          <div className="flex-column d-flex justify-content-center align-items-center">
            <h2 className="card-title text-center mb-2 ">{data.text}</h2>
            <Link to={'/' + data.authorMeta.nickName}>
              {' '}
              <div
                className="userData mt-2 mb-2 text-center"
                // onClick={() => setCurrentUser(data.authorMeta.nickName)}
              >
                <img
                  style={{
                    display: 'inline',
                    width: 60,
                    height: 'auto',
                    marginRight: 10
                  }}
                  className="rounded"
                  src={data.authorMeta.avatar}
                  alt={data.authorMeta.nickName}
                />
                <h3 style={{ display: 'inline' }} className="text-light">
                  {data.authorMeta.nickName}
                </h3>
              </div>
            </Link>
            <div className="videoStats text-secondary mt-3">
              <h4>{'❤️ Likes: ' + numberWithCommas(data.diggCount)}</h4>
              <h4>{'💭 Comments: ' + numberWithCommas(data.commentCount)}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingFeedItem;
