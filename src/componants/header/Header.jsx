import "./Header.css";
import logo from "../../assets/react.svg";

export default function Header() {
  return (
    <div className="container">
      <div className="titleContainer">
        <img src={logo} alt="logo de react" width={48} height={48} />
        <div>
          <h1>To-Do list</h1>
          <code>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus soluta quod, eius necessitatibus laboriosam temporibus mollitia?
          </code>
        </div>
      </div>
    </div>
  );
}
