import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  aspect-ratio: 16/9;
  z-index: 2;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  display: block;
`;

interface HoverVideoProps {
  src: string;
  poster?: string;
}

const HoverVideo: React.FC<HoverVideoProps> = ({ src, poster }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <VideoContainer>
      <StyledVideo
        ref={videoRef}
        src={src}
        poster={poster}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        loop
        muted
      />
    </VideoContainer>
  );
};

export default HoverVideo;
