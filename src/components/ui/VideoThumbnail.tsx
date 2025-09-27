import { useState } from 'react';

interface VideoThumbnailProps {
  videoUrl: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
}

export default function VideoThumbnail({
  videoUrl,
  thumbnailSrc,
  thumbnailAlt
}: VideoThumbnailProps) {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    img.style.display = 'none';

    const container = img.parentElement;
    if (container) {
      container.classList.add('bg-gray-secondary', 'flex', 'items-center', 'justify-center');
      container.innerHTML = `
        <div class="text-white text-center">
          <svg class="w-16 h-16 mx-auto mb-4 opacity-60" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
          </svg>
          <p>Thumbnail del Video</p>
        </div>
      `;
    }
  };

  if (showVideo) {
    return (
      <div className="w-full max-w-2xl mx-auto mb-8">
        <div className="aspect-video rounded-2xl overflow-hidden">
          <iframe
            src={`${videoUrl}?autoplay=1`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div
        className="relative aspect-video bg-gray-secondary rounded-2xl overflow-hidden cursor-pointer group"
        onClick={handlePlayClick}
      >
        {/* Thumbnail image */}
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}