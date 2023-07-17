import { Outlet, NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">Jerrick</NavLink>
          <hr />
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <hr />
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
