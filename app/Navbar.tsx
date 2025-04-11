import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active navbar-brand">
          <Link className="nav-link" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item active m-2">
          <Link className="nav-link" href="/signup">
            Sign up
          </Link>
        </li>
        <li className="nav-item active m-2">
          <Link className="nav-link" href="/login">
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
