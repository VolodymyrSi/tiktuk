// const UserInfo = ({ user, stats}) => {
//     console.log(user, stats);
//   return (
//     <div>
//       {user && (
//         <div>
//           <h2>{user.nickname}</h2>
//           <img src={user.avatarLarger} alt={user.nickname} />
//           {/* <a href={user.bioLink.link}>{user.bioLink.link}</a> */}
//         </div>
//       )}

//       {stats && (
//         <div>
//           <p>{`Followers: ${stats.followerCount}`}</p>
//           <p>{`Following: ${stats.followingCount}`}</p>
//           <p>{`Total likes: ${stats.heartCount}`}</p>
//           <p>{`Total videos: ${stats.videoCount}`}</p>
//         </div>
//       )}
//       <p>I am user info</p>
//     </div>
//   );
// };

const UserInfo = (props) => {
  console.log(props);
  return (
    <div>
      <p>I am user info</p>
    </div>
  );
};

export default UserInfo;
