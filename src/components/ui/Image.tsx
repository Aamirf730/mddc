'use client';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Image({ src, alt, width, height, className, ...props }: ImageProps) {
  // Get the file extension
  const ext = src.split('.').pop()?.toLowerCase();
  
  // Base image URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const imagePath = src.startsWith('/') ? src : `/images/${src}`;
  const fullUrl = `${baseUrl}${imagePath}`;

  return (
    <img
      src={fullUrl}
      alt={alt}
      width={width}
      height={height}
      className={`${className || ''} object-contain`}
      {...props}
    />
  );
} 