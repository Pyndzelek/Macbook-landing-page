import { navLinks } from "../constants";

function NavBar() {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <ul>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href="#">{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="gap-3 flex-center">
          <button>
            <img src="/search.svg" alt="search" />
          </button>
          <button>
            <img src="/cart.svg" alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
