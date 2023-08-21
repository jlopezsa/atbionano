import NavBarWithSections from "../navBar/NavBarWithSections";

const Header = () => {
  return (
    <div
      class={`fixed top-0 z-50 w-full bg-primary flex flex-nowrap justify-between items-center`}
    >
      <NavBarWithSections />
    </div>
  );
};

export default Header;
