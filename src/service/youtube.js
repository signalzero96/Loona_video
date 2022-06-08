class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  async mostPopular() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=이달의소녀&order=viewCount&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&order=viewCount&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
