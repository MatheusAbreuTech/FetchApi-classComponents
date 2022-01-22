import P from 'prop-types';
import './styles.css';

function Button({ text, onClick, disabled = false }) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};

export default Button;
