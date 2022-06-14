import axios from 'axios';

const KEY = 'AIzaSyBhlU-Bhd_mSryeVPo4MdBqtJnsKa1-9e8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
