const VideoFeedItem = ({ userFeedServerData }) => {
  console.log(userFeedServerData);
  return (
    <div>
      <p>I am a video feed item</p>
      {userFeedServerData.map((data) => (
        <div key={data.id} className="card bg-dark text-light">
          <h2 className="card-title text-center mb-2 ">{data.desc}</h2>
          <video
            className="card-img"
            controls
            width={data.video.width}
            height={data.video.height}
            src={data.video.playAddr}
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded video"
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
          />
          <div className="flex-row d-flex justify-content-around align-items-center">
            <div className="userData mt-2 mb-2 text-center">
              <img
                style={{ display: 'inline', width: 60, height: 'auto' }}
                className="rounded"
                src={data.author.avatarThumb}
                alt={data.author.nickname}
              />
              <h3>{data.author.nickname}</h3>
            </div>
            <div className="videoStats text-secondary">
              <h4>{'Likes: ' + data.stats.diggCount}</h4>
              <h4>{'Comments: ' + data.stats.commentCount}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoFeedItem;
