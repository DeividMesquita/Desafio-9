import './style.css';

function Button({ showModal, title, action, className, type }) {
  return (
    <div className='c-button'>
      <button 
        type={type} 
        onClick={() => showModal && showModal(true, action)} 
        className={className}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;