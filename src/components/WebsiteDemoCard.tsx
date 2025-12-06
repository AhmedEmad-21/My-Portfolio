import React, { useRef, useState, useEffect } from "react";
type WebsiteDemoCardProps = {
  demoUrl?: string;
  zoom?: number;
};

const WebsiteDemoCard: React.FC<WebsiteDemoCardProps> = React.memo(({ demoUrl, zoom = 1 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (demoUrl) {
      window.open(demoUrl, "_blank");
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-sm mx-auto ${demoUrl ? "cursor-pointer hover:shadow-md transition" : ""}`}
      onClick={handleClick}
    >
      {/* Background Preview */}
      {demoUrl && isVisible ? (
        <iframe
          src={demoUrl}
          loading="lazy"
          className="absolute inset-0 w-full h-full pointer-events-none filter grayscale brightness-40"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'top left', width: `${100 / zoom}%`, height: `${100 / zoom}%` }}
          title="Website Preview"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center text-white text-lg font-semibold">
          No Preview Available
        </div>
      )}
    </div>
  );
});

export default WebsiteDemoCard;
