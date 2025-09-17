import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes,
  fill = false
}: OptimizedImageProps) {
  const imageProps = {
    src,
    alt,
    className,
    priority,
    ...(fill ? { fill: true } : { width, height }),
    ...(sizes && { sizes }),
  };

  return <Image {...imageProps} />;
}
