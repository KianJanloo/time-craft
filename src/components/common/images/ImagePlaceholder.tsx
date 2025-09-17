interface ImagePlaceholderProps {
  width: number;
  height: number;
  alt: string;
  className?: string;
}

export default function ImagePlaceholder({ width, height, alt, className = "" }: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <div className="text-center text-gray-500">
        <div className="text-4xl mb-2">⏰</div>
        <div className="text-sm font-medium">{alt}</div>
      </div>
    </div>
  );
}
