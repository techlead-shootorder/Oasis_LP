import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { X, Move } from 'lucide-react';

const YoutubePlayer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [size, setSize] = useState({ width: 450, height: 300 });
  
  // Dragging functionality
  const handleMouseDown = (e) => {
    if (e.target.closest('.handle')) {
      setIsDragging(true);
      const startX = e.pageX - position.x;
      const startY = e.pageY - position.y;
      
      const handleMouseMove = (e) => {
        setPosition({
          x: e.pageX - startX,
          y: e.pageY - startY
        });
      };
      
      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  // Resizing functionality
  const handleResizeMouseDown = (e, direction) => {
    e.stopPropagation();
    const startX = e.pageX;
    const startY = e.pageY;
    const startWidth = size.width;
    const startHeight = size.height;
    
    const handleMouseMove = (e) => {
      const deltaX = e.pageX - startX;
      const deltaY = e.pageY - startY;
      
      if (direction === 'se') {
        setSize({
          width: Math.max(300, startWidth + deltaX),
          height: Math.max(200, startHeight + deltaY)
        });
      }
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Custom hook to replace Zustand store
  const useVideoPlayer = () => {
    const [videoPlayer, setVideoPlayer] = useState({
      video: '',
      visible: true,
      inViewPort: true,
      time: 0
    });

    const stopVideoPlayer = () => {
      setVideoPlayer(prev => ({
        ...prev,
        video: '',
        visible: false
      }));
    };

    return { videoPlayer, stopVideoPlayer };
  };

  const { videoPlayer, stopVideoPlayer } = useVideoPlayer();

  if (!videoPlayer.visible) {
    return null;
  }

  return (
    <div
      className="fixed"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
    >
      <Card className="relative" style={{ width: size.width, height: size.height }}>
        <iframe
          id="player"
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoPlayer?.video}?autoplay=1&start=${Math.floor(videoPlayer?.time)}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        
        <button
          className="absolute top-2 right-2 p-1 bg-gray-800/80 rounded-full hover:bg-gray-700/80 transition-colors"
          onClick={stopVideoPlayer}
        >
          <X className="h-4 w-4 text-white" />
        </button>
        
        <div className="handle absolute top-2 left-2 p-1 bg-gray-800/80 rounded-full hover:bg-gray-700/80 transition-colors cursor-move">
          <Move className="h-4 w-4 text-white" />
        </div>
        
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
          onMouseDown={(e) => handleResizeMouseDown(e, 'se')}
        />
      </Card>
    </div>
  );
};

export default YoutubePlayer;