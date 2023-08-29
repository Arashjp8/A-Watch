import { useState } from "react";

interface Props {
  content: string;
  fontSize: string;
  limit: number;
  maxWidth?: string;
  color?: string;
}
const ExpandableText = ({
  content,
  fontSize,
  maxWidth,
  color,
  limit,
}: Props) => {
  const [isExpand, setExpand] = useState(false);
  return (
    <p className={`${fontSize} ${maxWidth} ${color} font-light`}>
      {isExpand
        ? content
        : content.length > limit
        ? content.slice(0, limit) + "..."
        : content}
      <button
        onClick={() => setExpand(!isExpand)}
        className={`${
          content.length > limit ? "block" : "hidden"
        } my-2 flex flex-row items-center gap-1 rounded-3xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 ease-linear hover:rounded-xl hover:bg-white hover:text-blue-600`}
      >
        {isExpand ? "Show less" : "Show more"}
      </button>
    </p>
  );
};

export default ExpandableText;
