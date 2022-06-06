import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=이달의소녀&order=viewCount&key=AIzaSyBXXQMDVC9zgcqiNi4VD425CkcIy0ZMnk0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []); // mount 됐을때만 호출이 된다.
  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
