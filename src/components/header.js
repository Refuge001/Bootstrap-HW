function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
        <h1>
          <a className='navbar-brand' href='/index'>
            Will Utterback
          </a>
        </h1>
        <div className='dropdown navbar-toggler'>
          <button
            className='l-navbar btn btn-secondary'
            id='dropdownMenuLink'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
            aria-label='Navigation button'
          >
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </button>
          <div
            className='dropdown-menu dropdown-menu-right'
            aria-labelledby='dropdownMenuLink'
          >
            <div className='dropdown-header'>Site Navigation</div>
            <a className='dropdown-item' href='#/'>
              About Me
            </a>
            <a className='dropdown-item' href='#/portfolio'>
              Portfolio
            </a>
            <a className='dropdown-item' href='#/contact'>
              Contact
            </a>
          </div>
        </div>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                About Me
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#/portfolio'>
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#/contact'>
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
