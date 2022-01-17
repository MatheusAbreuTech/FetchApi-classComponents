import "./styles.css";

function Button({ onClick, disabled }) {
  return (
    <button disabled={disabled} onClick={onClick}>
      Load more posts
    </button>
  );
}

export default Button;
