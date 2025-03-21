
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const colors = [
      { r: 247, g: 201, b: 72, a: 0.3 },  // Yellow
      { r: 255, g: 255, b: 255, a: 0.4 }, // White
      { r: 248, g: 246, b: 243, a: 0.3 }, // Off-white
    ];

    const blobs = Array.from({ length: 5 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 50 + Math.random() * 100,
      xSpeed: (Math.random() - 0.5) * 0.7,
      ySpeed: (Math.random() - 0.5) * 0.7,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      blobs.forEach(blob => {
        blob.x += blob.xSpeed;
        blob.y += blob.ySpeed;
        
        if (blob.x < 0 || blob.x > width) blob.xSpeed *= -1;
        if (blob.y < 0 || blob.y > height) blob.ySpeed *= -1;
        
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0, 
          blob.x, blob.y, blob.radius
        );
        
        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.color.a})`);
        gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
