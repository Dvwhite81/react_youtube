import React from 'react'
import { Link } from "react-router-dom";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (

    <>
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
            <div  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg text-xl" src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} />

                <div className="p-5">

                    <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {snippet?.channelTitle || demoChannelTitle}</p>

                </div>
            </div>
        </Link>





    </>
);

export default VideoCard
