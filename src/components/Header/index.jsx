import './style.css';

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <h1>
          <span className='header__logo--task'>TASKS</span>
          <span className='header__logo--to'>TO</span>
          <span className='header__logo--do'>DO</span>
        </h1>
      </div>
    </header>
  );
}

export default Header;