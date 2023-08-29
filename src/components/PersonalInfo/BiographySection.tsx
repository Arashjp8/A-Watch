import ExpandableText from "../ExpandableText";

interface Props {
  biography: string;
}
const BiographySection = ({ biography }: Props) => {
  return (
    <section className="">
      <h3 className="pb-3 text-xl font-light text-white/60 ssm:text-2xl">
        Biography:{" "}
      </h3>
      <ExpandableText
        content={biography}
        fontSize="text-lg"
        limit={500}
        color="text-white"
      />
    </section>
  );
};

export default BiographySection;
