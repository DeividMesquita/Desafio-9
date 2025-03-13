import './style.css';

function Button({showModal, title, action}) {
  return (
    <div className='c-button'>
      <button type="button" onClick={() => showModal(true, action)}>{title}</button>
    </div>
  );
}

export default Button;