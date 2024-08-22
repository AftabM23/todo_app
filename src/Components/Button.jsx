/* eslint-disable react/prop-types */
function Button({ children, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

export default Button;
