import React, { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  maxWidth = 400,
  maxHeight = 300,
  style = {}
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  // Generate responsive srcset for ButterCMS images
  const generateSrcSet = (originalSrc) => {
    if (!originalSrc || !originalSrc.includes('cdn.buttercms.com')) {
      return undefined;
    }
    
    // ButterCMS supports image transformations via URL parameters
    const baseUrl = originalSrc.split('?')[0];
    return `${baseUrl}?w=300 300w,
            ${baseUrl}?w=400 400w,
            ${baseUrl}?w=600 600w,
            ${baseUrl}?w=800 800w`;
  };

  const handleLoad = (e) => {
    const img = e.target;
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight
    });
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Calculate the best fit dimensions for the image
  const getImageStyle = () => {
    if (!imageDimensions.width || !imageDimensions.height) {
      return {
        width: '100%',
        height: 'auto',
        maxHeight: `${maxHeight}px`,
        objectFit: 'contain',
        objectPosition: 'center'
      };
    }

    const aspectRatio = imageDimensions.width / imageDimensions.height;
    const containerAspectRatio = maxWidth / maxHeight;

    if (aspectRatio > containerAspectRatio) {
      // Image is wider than container - fit to width
      return {
        width: '100%',
        height: 'auto',
        maxHeight: `${maxHeight}px`,
        objectFit: 'contain',
        objectPosition: 'center'
      };
    } else {
      // Image is taller than container - fit to height
      return {
        width: 'auto',
        height: `${maxHeight}px`,
        maxWidth: '100%',
        objectFit: 'contain',
        objectPosition: 'center'
      };
    }
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ minHeight: '200px' }}
      >
        <span className="text-gray-500">Image failed to load</span>
      </div>
    );
  }

  // Determine appropriate min-height based on maxHeight
  const containerMinHeight = maxHeight <= 30 ? '30px' : '200px';
  
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ 
        minHeight: containerMinHeight, 
        maxHeight: `${maxHeight}px`,
        ...style 
      }}
    >
      <img
        src={src}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={getImageStyle()}
      />
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ minHeight: containerMinHeight }}
        >
          <span className="text-gray-400">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
