import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  className: string;
}
const ImageWrapper = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};

export default ImageWrapper;
