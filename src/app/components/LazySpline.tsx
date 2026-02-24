import { useState, useEffect, useRef, Suspense, lazy } from 'react';

// Lazy load Spline - only load when in viewport
const Spline = lazy(() => import('@splinetool/react-spline'));

// Loading skeleton for Spline
function SplineSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0a0a0f]/50 rounded-xl">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-3 border-[#00d4ff]/30 border-t-[#00d4ff] rounded-full animate-spin" />
        <p className="text-white/40 text-xs font-mono">Loading 3D...</p>
      </div>
    </div>
  );
}

interface LazySplineProps {
  scene: string;
}

export function LazySpline({ scene }: LazySplineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay to prioritize initial page load
            setTimeout(() => {
              setIsVisible(true);
            }, 1500);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
    >
      {isVisible ? (
        <Suspense fallback={<SplineSkeleton />}>
          <Spline 
            scene={scene} 
            onLoad={() => setIsLoaded(true)}
          />
        </Suspense>
      ) : (
        <SplineSkeleton />
      )}
    </div>
  );
}

export default LazySpline;

