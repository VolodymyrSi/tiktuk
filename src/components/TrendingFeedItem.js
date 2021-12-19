import { Link } from 'react-router-dom';
import { numberWithCommas } from '../utils/Helper';
import PropTypes from 'prop-types';

const TrendingFeedItem = ({ trendingFeedServerData }) => {
  return (
    <div className="bg-dark">
      {trendingFeedServerData.map((data) => (
        <div
          key={data.id}
          className="card bg-dark text-light flex-lg-row flex-md-column flex-sm-column align-items-md-center align-items-sm-center">
          <div style={{ textAlign: 'center' }}>
            <video
              className="m-lg-5"
              controls
              width={data.videoMeta.width / 2}
              height={data.videoMeta.height / 2}
              src={data.videoUrl}
              frameBorder="0"
              allowFullScreen
              title="Embedded video"
            />
          </div>
          <div
            className="flex-column d-flex justify-content-center align-items-center"
            style={{ width: '100%' }}>
            <h2 className="card-title text-center mb-2 ">{data.text}</h2>
            <Link to={'/' + data.authorMeta.name}>
              {' '}
              <div className="userData mt-2 mb-2 text-center">
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

TrendingFeedItem.propTypes = {
  trendingFeedServerData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      videoMeta: PropTypes.object.isRequired,
      videoUrl: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TrendingFeedItem;
