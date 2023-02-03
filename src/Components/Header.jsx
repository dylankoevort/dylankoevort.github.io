import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <header className="text-3xl text-gray-700 font-bold mb-5 flex justify-between">
        <h1>{title}</h1>
        <Button
          colour={showAdd ? "bg-red-500" : "bg-green-500"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      </header>
    </div>
  );
};

export default Header;
