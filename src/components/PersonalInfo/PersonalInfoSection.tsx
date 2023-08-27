import { Person } from "../../interfaces/Person";
import PersonalInfo from "./PersonalInfo";

interface Props {
  person: Person;
  mobileView: boolean;
}
const PersonalInfoSection = ({ person, mobileView }: Props) => {
  const gender = person?.gender === 1 ? "Female" : "Male";
  return (
    <>
      {
        <section
          className={`${
            mobileView
              ? "flex flex-col gap-2 sm:hidden"
              : "hidden flex-col gap-1 sm:flex"
          }`}
        >
          <h3 className="pb-3 text-xl font-light text-white/60 ssm:text-2xl">
            Personal Info
          </h3>
          <div className="flex flex-col gap-5">
            <PersonalInfo
              title="Known For"
              content={person.known_for_department}
            />
            <PersonalInfo title="Gender" content={gender} />
            <PersonalInfo title="Birthday" content={person.birthday} />
            <PersonalInfo
              title="Place of Birth"
              content={person.place_of_birth}
            />
          </div>
        </section>
      }
    </>
  );
};

export default PersonalInfoSection;
