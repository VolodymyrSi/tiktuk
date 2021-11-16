// This should work if the API works and returns data for different users

// const getUserFeedData = (currentUser) =>
//   axios
//     .request({
//       method: 'GET',
//       url: `https://tiktok33.p.rapidapi.com/user/feed/${currentUser}`,
//       headers: {
//         'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
//         'x-rapidapi-key': '22a63312d2msha59bc2074f8e5bep1ac1f0jsn985426636d60'
//       }
//     })
//     .then(function (response) {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(function (error) {
//       console.error(error);
//     });

// const getUserInfoData = (currentUser) =>
//   axios
//     .request({
//       method: 'GET',
//       url: `https://tiktok33.p.rapidapi.com/user/info/${currentUser}`,
//       headers: {
//         'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
//         'x-rapidapi-key': '22a63312d2msha59bc2074f8e5bep1ac1f0jsn985426636d60'
//       }
//     })
//     .then(function (response) {
//       return response.data;
//     })
//     .catch(function (error) {
//       console.error(error);
//     });

//  This should work if the API works and returns data for different users

//   const [userFeedServerData, setUserFeedServerData] = useState([]);
//   const [userDataServerData, setUserDataServerData] = useState({});

//   This should work if the API works and returns data for different users

//   useEffect(() => {
//     if (params.currentUser) {
//       getUserFeedData(params.currentUser).then((userFeedData) => {
//         setUserFeedServerData(userFeedData);
//       });
//     }
//   }, [params]);

//   useEffect(() => {
//     console.log(params.currentUser);
//     if (params.currentUser) {
//       getUserInfoData(params.currentUser).then((userInfoData) => {
//         setUserDataServerData(userInfoData);
//       });
//     }
//   }, [params]);