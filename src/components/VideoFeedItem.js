import { numberWithCommas } from '../utils/Helper';

const VideoFeedItem = ({ userFeedServerData }) => {
  // console.log(userFeedServerData);
  return (
    <div className="bg-dark">
      {userFeedServerData.map((data) => (
        <div key={data.id} className="card bg-dark text-light flex-lg-row flex-md-row flex-sm-column">
          <video
            className="m-5"
            controls
            width='{data.video.width}'
            height={data.video.height}
            src={data.video.playAddr}
            frameBorder="0"
            allowFullScreen
            title="Embedded video"
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
          />
          <div className="flex-column d-flex justify-content-center align-items-center">
            <h2 className="card-title text-center mb-2 ">{data.desc}</h2>
            <div className="userData mt-2 mb-2 text-center">
              <img
                style={{
                  display: 'inline',
                  width: 60,
                  height: 'auto',
                  marginRight: 10
                }}
                className="rounded"
                src={data.author.avatarThumb}
                alt={data.author.nickname}
              />
              <h3 style={{ display: 'inline' }} className="text-light">
                {data.author.nickname}
              </h3>
            </div>
            <div className="videoStats text-secondary mt-3">
              <h4>{'❤️ Likes: ' + numberWithCommas(data.stats.diggCount)}</h4>
              <h4>
                {'💭 Comments: ' + numberWithCommas(data.stats.commentCount)}
              </h4>
              <h4>{'📺 Views: ' + (data.stats.playCount)}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoFeedItem;
