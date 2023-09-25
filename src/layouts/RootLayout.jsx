import { Outlet, NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="TopNavBar">
          <NavLink to="/">Jerrick</NavLink>
          <div className="TopNavBarPages">
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/work">My Work</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
          </div>
        </nav>
        <hr />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <nav>
          <div />
          <a href="https://github.com/Jerricke">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/jerrick-ee/">
            <AiFillLinkedin />
          </a>
        </nav>
      </footer>
    </div>
  );
}
