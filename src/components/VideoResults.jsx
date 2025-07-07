import React from "react";
import ReactPlayer from "react-player";

const VideoResults = ({ results }) => (
  <div className="flex flex-wrap">
    {results?.map((video, index) => (
      <div key={index} className="p-2">
        {video?.additional_links?.[0]?.href && (
          <ReactPlayer url={video.additional_links[0].href} controls width="355px" height="200px" />
        )}
      </div>
    ))}
  </div>
);

export default VideoResults; 