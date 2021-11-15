const VideoFeedItem = ({ userFeedServerData }) => {
  return (
    <div>
      <p>I am a video feed item</p>
      {userFeedServerData.map((data) => (
        <div key={data.id}>
          <h2>{data.desc}</h2>
          <iframe
            width={data.video.width}
            height={data.video.height}
            src={data.video.playAddr}
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded video"
          />
          <div className="userData">
            <img src={data.author.avatarThumb} alt={data.author.nickname} />
            <p>{data.author.nickname}</p>
          </div>
          <div className="videoStats">
            <p>{'liked' + data.stats.diggCount + 'time(s)'}</p>
            <p>{data.stats.commentCount + 'comments'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoFeedItem;
