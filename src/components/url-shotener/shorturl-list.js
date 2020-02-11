import React from "react";
import "./shorturl-list.css";

export function ShortUrlList({ urls }) {
  return (
    <ul className="shorturl-list">
      {urls.map(url => (
        <li key={url.id}>
          <div>{url.url}</div>
          <a href={url.url}>https://pico.url/{url.shorturl}</a>
        </li>
      ))}
    </ul>
  );
}
