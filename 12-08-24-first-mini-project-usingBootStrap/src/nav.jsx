const Nav = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" aria-disabled="true">
          Disabled
        </a>
      </li>
    </ul>
  );
};
Nav();
export default Nav;
