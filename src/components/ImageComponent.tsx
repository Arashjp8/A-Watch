interface Props {
  src: string;
  alt: string;
  className?: string;
}
const ImageComponent = ({ src, alt, className }: Props) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

export default ImageComponent;
