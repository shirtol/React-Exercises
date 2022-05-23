import axios from "axios";

const KEY = "AIzaSyDbYRa-metynUf9sV7ttZueSY1salGu9Hc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});
