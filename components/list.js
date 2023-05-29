import { FaHandPointRight } from "react-icons/fa";

export default function List({ heading, desc }) {
  return (
    <div style={{ margin: "20px 0 20px 0", paddingLeft: "10%" }}>
      <FaHandPointRight style={{ marginRight: "10px" }} />{" "}
      <h3 style={{ display: "inline", fontWeight: "400" }}>{heading}</h3>
      <p style={{ marginTop: "20px", fontWeight: "300", paddingRight: "10px", width: "80%" }}>
        {desc}
      </p>
    </div>
  );
}
