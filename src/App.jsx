import { Outlet, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Seuss Treasury</h1>
      <p>Welcome to the Seuss Treasury! This app allows you to explore books by Dr. Seuss and discover some of the most delightful quotes from these beloved works. Use the links below to browse the collection of books or check out some random quotes.</p>
      <nav>
        <NavLink to="/books" className="nav-link">Books</NavLink> |
        <NavLink to="/quotes" className="nav-link">Quotes</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
