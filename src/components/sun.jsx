import React, { useEffect, useRef } from 'react';

const SunCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const s = document.createElement('canvas');
    s.width = s.height = 512;
    const sun = s.getContext('2d');

    const gradient = sun.createLinearGradient(0, 50, 0, canvas.height - 50);
    gradient.addColorStop(0, '#fbf120ff');
    gradient.addColorStop(0.355, '#fd8227ff');
    gradient.addColorStop(0.356, '#fd822700');
    gradient.addColorStop(0.364, '#fd822700');
    gradient.addColorStop(0.365, '#fd8227ff');
    gradient.addColorStop(0.42, '#fe6828ff');
    gradient.addColorStop(0.421, '#fe682800');
    gradient.addColorStop(0.434, '#fe682800');
    gradient.addColorStop(0.435, '#fe6828ff');
    gradient.addColorStop(0.49, '#fe5430ff');
    gradient.addColorStop(0.491, '#fe543000');
    gradient.addColorStop(0.509, '#fe543000');
    gradient.addColorStop(0.51, '#fe5430ff');
    gradient.addColorStop(0.562, '#fe4b38ff');
    gradient.addColorStop(0.563, '#fe4b3800');
    gradient.addColorStop(0.582, '#fe4b3800');
    gradient.addColorStop(0.584, '#fe4b38ff');
    gradient.addColorStop(0.63, '#fe3446ff');
    gradient.addColorStop(0.631, '#fe344600');
    gradient.addColorStop(0.657, '#fe344600');
    gradient.addColorStop(0.658, '#fe3446ff');
    gradient.addColorStop(0.71, '#fe2558ff');
    gradient.addColorStop(0.711, '#fe255800');
    gradient.addColorStop(0.739, '#fe255800');
    gradient.addColorStop(0.74, '#fe2558ff');
    gradient.addColorStop(0.785, '#fe1f5fff');
    gradient.addColorStop(0.786, '#fe1f5f00');
    gradient.addColorStop(0.825, '#fe1f5f00');
    gradient.addColorStop(0.826, '#fe1f5fff');
    gradient.addColorStop(0.86, '#fe1967ff');
    gradient.addColorStop(0.861, '#fe196700');
    gradient.addColorStop(0.905, '#fe196700');
    gradient.addColorStop(0.906, '#fe1967ff');
    gradient.addColorStop(0.94, '#ff1270ff');
    gradient.addColorStop(0.941, '#ff127000');

    sun.fillStyle = gradient;
    sun.beginPath();
    sun.arc(canvas.height / 2, canvas.height / 2, 206, 0, 2 * Math.PI);
    sun.fill();

    ctx.drawImage(s, 0, 0);
  }, []);

  return (
    <div className=' absolute flex justify-center items-center w-[700px]  -z-10 '>
      <canvas
        ref={canvasRef}
        width={512}
        height={512}
        id='c'
        className=''
      ></canvas>
    </div>
  );
};

export default SunCanvas;
