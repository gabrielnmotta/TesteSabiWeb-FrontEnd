import { Link } from "react-router-dom";
import backImg from "../../../assets/icons/back.png";
import "./header.css";

export function Header({ title }) {
  return (
    <>
      <div class="header">
        <Link to="/">
          <img src={backImg} alt="Turn Back" />
        </Link>

        <h1>{title}</h1>
      </div>
    </>
  );
}
