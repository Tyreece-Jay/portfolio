import React, { useEffect } from 'react';
import { Gradient } from './gradient';

export default function Canvas() {
  useEffect(() => {
    const gradient: any = new Gradient();
    
    gradient.initGradient("#gradient-canvas");
  }, []);

  return <canvas id="gradient-canvas" data-transition-in />
}
