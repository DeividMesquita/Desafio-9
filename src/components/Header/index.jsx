import './style.css';

function Header() {
  return (
    <header className='c-header'>
      <div className='c-header__logo'>
        <h1>
          <span className='c-header__logo--task'>TASKS</span>
          <span className='c-header__logo--to'>TO</span>
          <span className='c-header__logo--do'>DO</span>
        </h1>
      </div>
    </header>
  );
}

export default Header;