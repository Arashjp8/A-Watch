import { ReactNode } from "react";

interface Props {
  handleClick: () => void;
  toggle: boolean;
  beforeClickIcon: ReactNode;
  afterClickIcon: ReactNode;
}

const Button = ({
  handleClick,
  toggle,
  beforeClickIcon,
  afterClickIcon,
}: Props) => {
  return (
    <button
      onClick={() => handleClick()}
      className={`mb-1 text-xl font-semibold ${
        toggle
          ? "bg-green-600 text-white"
          : "bg-blue-600 text-white hover:bg-white hover:text-blue-600"
      } flex flex-row items-center gap-1 rounded-3xl p-4 transition-all duration-150 ease-linear hover:rounded-xl`}
    >
      {toggle ? afterClickIcon : beforeClickIcon}
    </button>
  );
};

export default Button;
