import React, { useEffect } from 'react';
import InitCanvas from './utils/Canvas';

const CanvasBackground = () => {
  useEffect(() => {
    InitCanvas();
  }, []);

  return <canvas className="canvas" id="partly_canvas" />;
};

export default CanvasBackground;
