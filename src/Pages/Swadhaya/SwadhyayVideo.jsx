import { useState } from "react";

import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import VideoPlayer from "../../Components/VideoPlayer";

import SWADHYAYVIDEOLIST from "../../Constants/SWADHYAYVIDEOLIST";

function SwadhyayVideo() {
  const [VideoPlaying, setVideoPlaying] = useState(SWADHYAYVIDEOLIST[0]);
  return (
    <>
      <Header />
      <div className="MostPopular">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="custom-video-player">
                <div className="video-player">
                  <VideoPlayer src={VideoPlaying.url} />
                </div>
                <div className="video-list">
                  {SWADHYAYVIDEOLIST.map((video) => (
                    <div
                      className={`video-item ${
                        video.title === VideoPlaying.title ? "active" : ""
                      }`}
                      onClick={() => setVideoPlaying(video)}
                    >
                      <div className="video-thumbnail">
                        <img src={video.thumbnail} alt={video.title} />
                      </div>
                      <div className="video-title">
                        <p>{video.title}</p>
                        <span>{video.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="playing-title pb-5 mb-5">
                  <h2>{VideoPlaying.title} </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SwadhyayVideo;
