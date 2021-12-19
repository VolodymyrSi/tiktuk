import PropTypes from 'prop-types';
import { numberWithCommas } from '../utils/Helper';

const UserInfo = ({ user, stats }) => {
  return (
    <div className="bg-dark text-light d-flex align-items-center justify-content-center p-3">
      {user && (
        <div>
          <h2 className="text-center">{user.nickname}</h2>
          <img
            style={{ width: 200 }}
            src={user.avatarLarger}
            alt={user.nickname}
          />
        </div>
      )}
      {stats && (
        <div className="ml-3">
          <p>{`⬅️ Followers: ${numberWithCommas(stats.followerCount)}`}</p>
          <p>{`➡️ Following: ${numberWithCommas(stats.followingCount)}`}</p>
          <p>{`❤️ Total likes: ${numberWithCommas(stats.heartCount)}`}</p>
          <p>{`🎥 Total videos: ${numberWithCommas(stats.videoCount)}`}</p>
        </div>
      )}
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      avatarLarger: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired
    })
  ).isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followerCount: PropTypes.string.isRequired,
      followingCount: PropTypes.string.isRequired,
      heartCount: PropTypes.string.isRequired,
      videoCount: PropTypes.string.isRequired
    })
  )
};

export default UserInfo;
