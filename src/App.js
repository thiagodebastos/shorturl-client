import React from "react";
import { UrlShortener, ShortUrlList } from "./components";

function App() {
  const [urls, setUrls] = React.useState([]);

  async function getUrls() {
    const result = await fetch("http://localhost:5000/api/shorturl").then(res =>
      res.json()
    );
    setUrls(result);
  }

  React.useEffect(() => {
    getUrls();
  }, [urls]);

  return (
    <div>
      <UrlShortener />
      <ShortUrlList urls={urls} />
    </div>
  );
}

export default App;
