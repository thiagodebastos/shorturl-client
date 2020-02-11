import React from "react";

export function UrlShortener() {
  const [url, setUrl] = React.useState("");

  async function handlePostUrl(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/shorturl/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });
  }

  return (
    <>
      <input
        type="text"
        name="url"
        placeholder="Shorten your link"
        onChange={e => setUrl(e.currentTarget.value)}
      />
      <input type="submit" value="Shorten" onClick={handlePostUrl} />
    </>
  );
}
