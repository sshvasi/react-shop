const Header = () => {
  return (
    <nav className="blue darken-4">
      <div className="nav-wrapper">
        <a
          href="https://sshvasi.github.io/react-shop/"
          className="brand-logo left"
        >
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/sshvasi/react-shop">GitHub</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
