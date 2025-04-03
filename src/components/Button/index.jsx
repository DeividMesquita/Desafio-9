import './style.css';

function Button({ showModal, title, action, className, type }) {
  return (
      <button 
        type={type} 
        onClick={() => showModal && showModal(true, action)} 
        className={className}
      >
        {title}
      </button>
  );
}

export default Button;