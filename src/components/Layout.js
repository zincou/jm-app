import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="App">
      <nav className="app-nav">
        <div className="app-nav-inner">
          <Link to="/" className="nav-brand">Formation front-end</Link>
          <Link to="/">Accueil</Link>
          <Link to="/cours">Cours</Link>
        </div>
      </nav>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
