import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // skip lazy loading for above-fold images
}

/**
 * OptimizedImage — Task 19
 * - Native lazy loading (loading="lazy") for below-fold images
 * - Explicit width/height to prevent layout shifts (CLS)
 * - Low-quality blur placeholder while loading
 * - decoding="async" so image decode doesn't block main thread
 */
export default function OptimizedImage({
  src, alt, className = '', width, height, priority = false,
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Skeleton placeholder — prevents layout shift */}
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'low'}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
