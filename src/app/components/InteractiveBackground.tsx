import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface Node {
  x: number;
  y: number;
  active: boolean;
  pulse: number;
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize particles
  const initParticles = () => {
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: ['#00d4ff', '#a855f7', '#ec4899', '#00ffff'][Math.floor(Math.random() * 4)]
      });
    }
    particlesRef.current = particles;
  };

  // Initialize grid nodes
  const initNodes = () => {
    const nodes: Node[] = [];
    const gridSize = 80;
    for (let x = 0; x < dimensions.width; x += gridSize) {
      for (let y = 0; y < dimensions.height; y += gridSize) {
        nodes.push({
          x: x + gridSize / 2,
          y: y + gridSize / 2,
          active: false,
          pulse: 0
        });
      }
    }
    nodesRef.current = nodes;
  };

  // Update canvas dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
        canvasRef.current.width = rect.width;
        canvasRef.current.height = rect.height;
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize particles and nodes when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles();
      initNodes();
    }
  }, [dimensions]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Mouse attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.02;
          particle.vy += (dy / distance) * force * 0.02;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check
        if (particle.x < 0 || particle.x > dimensions.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > dimensions.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Draw connections between nearby particles
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = otherParticle.x - particle.x;
          const dy = otherParticle.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (80 - distance) / 80 * 0.3;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Update and draw grid nodes
      nodesRef.current.forEach(node => {
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 60) {
          node.active = true;
          node.pulse = Math.min(node.pulse + 0.1, 1);
        } else {
          node.active = false;
          node.pulse = Math.max(node.pulse - 0.05, 0);
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3 + node.pulse * 5, 0, Math.PI * 2);
        ctx.fillStyle = node.active ? '#00d4ff' : '#00d4ff';
        ctx.globalAlpha = 0.3 + node.pulse * 0.7;
        ctx.fill();

        // Draw connections to nearby active nodes
        if (node.active) {
          nodesRef.current.forEach(otherNode => {
            if (otherNode !== node && otherNode.active) {
              const dx = otherNode.x - node.x;
              const dy = otherNode.y - node.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120) {
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(otherNode.x, otherNode.y);
                ctx.strokeStyle = '#00d4ff';
                ctx.globalAlpha = 0.2;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        }
      });

      // Draw circuit patterns
      drawCircuitPatterns(ctx);

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    if (dimensions.width > 0 && dimensions.height > 0) {
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  // Draw circuit patterns
  const drawCircuitPatterns = (ctx: CanvasRenderingContext2D) => {
    const time = Date.now() * 0.001;

    // Horizontal circuits
    for (let y = 50; y < dimensions.height; y += 100) {
      ctx.beginPath();
      ctx.moveTo(0, y);

      for (let x = 0; x < dimensions.width; x += 20) {
        const wave = Math.sin((x * 0.01) + time) * 10;
        ctx.lineTo(x, y + wave);
      }

      ctx.strokeStyle = '#00d4ff';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Vertical circuits
    for (let x = 50; x < dimensions.width; x += 100) {
      ctx.beginPath();
      ctx.moveTo(x, 0);

      for (let y = 0; y < dimensions.height; y += 20) {
        const wave = Math.cos((y * 0.01) + time) * 10;
        ctx.lineTo(x + wave, y);
      }

      ctx.strokeStyle = '#a855f7';
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Mouse-responsive circuit nodes
    const mouseX = mouseRef.current.x;
    const mouseY = mouseRef.current.y;

    for (let i = 0; i < 5; i++) {
      const angle = (time + i) * 0.5;
      const radius = 30 + Math.sin(time * 2 + i) * 10;
      const x = mouseX + Math.cos(angle) * radius;
      const y = mouseY + Math.sin(angle) * radius;

      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#ec4899';
      ctx.globalAlpha = 0.6;
      ctx.fill();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
