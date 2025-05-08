import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  textOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  animated = true, 
  size = 'md',
  textOnly = false 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Size mapping
  const sizeMap = {
    sm: {
      logoHeight: 30,
      fontSize: 'text-xl',
      canvasSize: 30,
    },
    md: {
      logoHeight: 40,
      fontSize: 'text-2xl',
      canvasSize: 40,
    },
    lg: {
      logoHeight: 60,
      fontSize: 'text-4xl',
      canvasSize: 60,
    },
  };
  
  // Draw the hexagon network
  useEffect(() => {
    if (textOnly) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const canvasSize = sizeMap[size].canvasSize;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    
    // Hexagon vertices (6 points)
    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;
    const radius = canvasSize / 2 - 2;
    const vertices: [number, number][] = [];
    
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      vertices.push([x, y]);
    }
    
    // Draw the hexagon network
    const drawNetwork = () => {
      ctx.clearRect(0, 0, canvasSize, canvasSize);
      
      // Draw lines
      for (let i = 0; i < vertices.length; i++) {
        for (let j = i + 1; j < vertices.length; j++) {
          const gradient = ctx.createLinearGradient(
            vertices[i][0], vertices[i][1], 
            vertices[j][0], vertices[j][1]
          );
          gradient.addColorStop(0, 'rgba(255, 165, 79, 0.6)'); // Orange
          gradient.addColorStop(0.5, 'rgba(255, 20, 147, 0.6)'); // Pink
          gradient.addColorStop(1, 'rgba(128, 0, 128, 0.6)'); // Purple
          
          ctx.beginPath();
          ctx.moveTo(vertices[i][0], vertices[i][1]);
          ctx.lineTo(vertices[j][0], vertices[j][1]);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      // Draw vertices (nodes)
      vertices.forEach(([x, y], index) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 4);
        
        // Different colors based on position (top to bottom gradient)
        if (index < 2) {
          gradient.addColorStop(0, '#FFA54F'); // Orange
          gradient.addColorStop(1, '#FF8C00');
        } else if (index < 4) {
          gradient.addColorStop(0, '#FF1493'); // Pink
          gradient.addColorStop(1, '#C71585');
        } else {
          gradient.addColorStop(0, '#9932CC'); // Purple
          gradient.addColorStop(1, '#800080');
        }
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };
    
    // Initial draw
    drawNetwork();
    
    // Animation if enabled
    if (animated) {
      let animationFrame: number;
      let angle = 0;
      
      const animate = () => {
        angle += 0.005;
        
        // Update vertices positions with slight movement
        for (let i = 0; i < vertices.length; i++) {
          const baseAngle = (Math.PI / 3) * i;
          const pulseRadius = radius * (1 + Math.sin(angle + i) * 0.05);
          vertices[i][0] = centerX + pulseRadius * Math.cos(baseAngle);
          vertices[i][1] = centerY + pulseRadius * Math.sin(baseAngle);
        }
        
        drawNetwork();
        animationFrame = requestAnimationFrame(animate);
      };
      
      animate();
      
      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [animated, size, textOnly]);
  
  return (
    <Link to="/" className="flex items-center">
      {!textOnly && (
        <div className="mr-2 relative">
          <canvas 
            ref={canvasRef} 
            className={`h-[${sizeMap[size].logoHeight}px] w-[${sizeMap[size].logoHeight}px]`}
            style={{ height: sizeMap[size].logoHeight, width: sizeMap[size].logoHeight }}
          />
        </div>
      )}
      <div className={`font-bold ${sizeMap[size].fontSize} logo-gradient`}>
        CyberDetox
      </div>
    </Link>
  );
};

export default Logo;
