interface Props {
  src: string;
  alt: string;
  className?: string;
}
const Image = ({ src, alt, className }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full min-h-full w-full object-cover ${className}`}
      loading="lazy"
    />
  );
};

export default Image;
