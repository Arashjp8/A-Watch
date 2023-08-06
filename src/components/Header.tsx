import SearchBar from "./SearchBar";

interface Props {
  selectedIcon: string;
  setSelectedIcon: (value: string) => void;
}

const Header = ({ selectedIcon, setSelectedIcon }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h2 className="my-10 text-5xl font-bold">{selectedIcon}</h2>
      <SearchBar setSelectedIcon={setSelectedIcon} />
    </div>
  );
};

export default Header;
