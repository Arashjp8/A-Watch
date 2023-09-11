interface Props {
  src: string;
  alt: string;
  className?: string;
}
const ImageComponent = ({ src, alt, className }: Props) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`h-[100%] w-[100%] object-cover ${className}`}
        loading="lazy"
      />
    </>
  );
};

export default ImageComponent;
