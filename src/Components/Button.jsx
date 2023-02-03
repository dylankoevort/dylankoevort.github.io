const Button = ({ colour, text, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        colour +
        " px-5 py-3 uppercase rounded shadow-md text-white text-base font-medium opacity-90 hover:opacity-100"
      }
    >
      {text}
    </button>
  );
};

export default Button;
