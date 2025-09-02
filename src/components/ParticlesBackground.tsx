import { useEffect, useRef } from 'react';

interface Particle {
   x: number;
   y: number;
   vx: number;
   vy: number;
   size: number;
   opacity: number;
   color: string;
}

export const ParticlesBackground = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const particlesRef = useRef<Particle[]>([]);
   const animationRef = useRef<number>(0);

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size
      const resizeCanvas = () => {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Initialize particles
      const initParticles = () => {
         particlesRef.current = [];
         const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));

         for (let i = 0; i < particleCount; i++) {
            particlesRef.current.push({
               x: Math.random() * canvas.width,
               y: Math.random() * canvas.height,
               vx: (Math.random() - 0.5) * 0.5,
               vy: (Math.random() - 0.5) * 0.5,
               size: Math.random() * 2 + 1,
               opacity: Math.random() * 0.5 + 0.1,
               color: Math.random() > 0.5 ? '#ff8904' : '#f3f3f3',
            });
         }
      };

      initParticles();

      // Animation loop
      const animate = () => {
         ctx.clearRect(0, 0, canvas.width, canvas.height);

         // Update and draw particles
         particlesRef.current.forEach((particle, index) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            // Keep particles in bounds
            particle.x = Math.max(0, Math.min(canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(canvas.height, particle.y));

            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.opacity;
            ctx.fill();

            // Draw connections to nearby particles
            particlesRef.current.forEach((otherParticle, otherIndex) => {
               if (index !== otherIndex) {
                  const distance = Math.sqrt(
                     Math.pow(particle.x - otherParticle.x, 2) +
                        Math.pow(particle.y - otherParticle.y, 2)
                  );

                  if (distance < 100) {
                     ctx.beginPath();
                     ctx.moveTo(particle.x, particle.y);
                     ctx.lineTo(otherParticle.x, otherParticle.y);
                     ctx.strokeStyle = '#ff8904';
                     ctx.globalAlpha = ((100 - distance) / 100) * 0.1;
                     ctx.lineWidth = 0.5;
                     ctx.stroke();
                  }
               }
            });
         });

         ctx.globalAlpha = 1;
         animationRef.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
         window.removeEventListener('resize', resizeCanvas);
         if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
         }
      };
   }, []);

   return (
      <canvas
         ref={canvasRef}
         className="absolute inset-0 pointer-events-none opacity-30"
         style={{ zIndex: 1 }}
      />
   );
};
