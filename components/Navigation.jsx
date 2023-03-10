import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div>
        <Link to="/"> TODO APP</Link>
      </div>
      <div>
        <Link to="/help"></Link>
      </div>
    </nav>
  );
};
export default Navigation;
