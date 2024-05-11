import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { IoCloseCircle } from "react-icons/io5";


interface IVideoModalProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  video: string;
}

const VideoModalInnerView = (props: IVideoModalProps) => {

  return (
    <div className='video__modal__container'>
      <Modal show={props.show} fullscreen={true} onHide={() => props.setShow(false)}>
        <div className='video__preview'>
          <video src={props.video} controls={true} autoPlay={true} muted />
        </div>
        <div onClick={() => props.setShow(false)} className='modal__close__button'>
          <IoCloseCircle />
        </div>
      </Modal>
    </div>
  );
}

export const VideoModal = React.memo(VideoModalInnerView);