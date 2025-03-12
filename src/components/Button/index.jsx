import './style.css';

function Button({title}) {
  return (
    <div className='c-button'>
      <button type="button">{title}</button>
    </div>
  );
}

export default Button;