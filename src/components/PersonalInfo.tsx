interface Props {
  title: string;
  content: string;
}

const PersonalInfo = ({ title, content }: Props) => {
  return (
    <div className="flex min-w-[200px] flex-col items-start gap-1 font-light">
      <h3 className="text-base font-semibold text-white/60 ssm:text-lg">
        {title}:{" "}
      </h3>
      <p className="text-lg text-white">{content}</p>
    </div>
  );
};

export default PersonalInfo;
