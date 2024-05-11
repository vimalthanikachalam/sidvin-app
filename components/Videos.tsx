import { VIDEOS } from "@/store/constants";
import { motion } from "framer-motion";
import React, { CSSProperties, useState } from "react";
import { GoPlay } from "react-icons/go";
import { VideoModal } from "./VideoModal";

interface IVideosInnerViewProps {}

const VideosInnerView = (props: IVideosInnerViewProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [video, setVideoSrc] = useState<string>('');

  return (
    <>
    <VideoModal setShow={setShow} show={show} video={video}/>
    <div className="sidvin__videoContainer">
      <div className="sidvin__videoInnerView">
        {VIDEOS.map(({ Title, ID, ImageSrc, VideoSrc }) => (
          <div
            className="sidvin__video__card"
            key={ID}
            style={{ "--imageSrc": `url(${ImageSrc})` } as CSSProperties}
          >
            <div className="sidvin__innerContainer">
              <div className="sidvin__video__title">{Title}</div>
              <div className="sidvin__video__cta">
                <motion.button onClick={() => {setShow(true); setVideoSrc(VideoSrc);}}>
                  <GoPlay /> Watch Now
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

VideosInnerView.displayName = "VideosView";
export const VideosView = React.memo(VideosInnerView);
