# Genesis Front-end School Practice Task

### Technology used:

- React functional components
- React hooks: useState, useEffect, useRef
- React Context
- React Router
- Axios
- Bootstrap

### Details:

The web app consists of 2 pages, which are provided by React Router. These are Trending page and user page.

|| Trending page | User page |
|-----------| ----------- | ----------- |
|Access type| homepage | via links |
|Route| `website.com/` | `website.com/{username}` |
|Components| Trending feed item | User feed item | User info |
|Shared state| `isLoading` | `isLoading` |


|   | Trending feed item   | User feed item  |  User info |
|---|---|---|---|
| Components include  | a number of videos based on server data  | 30 videos based on local data  | profile description based on server data |
| Data source  |  Axios async request | local data stored in `public/user-feed.json`  | Axios async request |
|  State |  `trendingFeedServerData` |  `dummyUserData`|  `userDataServerData` |



_**Trending page** is the **home page**. It renders a number of videos based on server data. The data is received with `Axios` async request. The data is placed in a state called `trendingFeedServerData` upon page load with `useEffect` hook._

 _If **username** or **userimage** is clicked, React Router `Link` element will lead to user page. The URL depends on the username and is in the following format: 'websitename.com/username'. **Any** user profile can be accessed via this link by typing it in URL address bar, so profiles beyond trending page can be visited._

_**User feed** page follows the same logics as **trending page**. However, it uses local data stored in `public/user-feed.json` to always display the same video._

_**Context** stores `isLoading` state which will display Boostrap spinner to notify the user that the content is being fetched from server._

### Styling

Minimal styling is done with **Bootstrap** classes.

### Responsiveness:

The video sections toggle between row and column layout based on user screen size.


### Extra detail:

- Unused data at `./src/Unused_data/UserFeedServerData.js` stores functionality needed to render real videos from Userpage. It worked before something bad happened to API.

- `Helper` function stored in `utils` folder uses a regular expression to add commas to likes and comments counters.

### Future ideas:

- [ ] Grid layout for desktop with 3 videos per row
- [ ] Improved styling
