import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";

export default function Links() {
  const aboutPlab2 =
    "https://docs.google.com/document/d/1JaAmO11LkKziv1eNqoVBYDMdzxSL7DMWl3d3hUxU5tM/edit?usp=sharing";

  const curriculum =
    "https://docs.google.com/document/d/1anAUPb085Wb8Mk4xVNCorHJfoNsxMQ4YVmqd2yk-C3k/edit?usp=sharing";

  const hematologyDemo =
    "https://docs.google.com/presentation/d/1NUcpM9JStHjP87pMqRgGnxOKR_2J_Rgh5daogYXvfHQ/edit?usp=sharing";

  return (
    <div className={styles.price}>
      <h2
        style={{
          fontWeight: "600",
          margin: "10px 0 10px 0",
        }}
      >
        Resources
      </h2>
      <Button style={{ margin: "15px" }} variant="contained" href={aboutPlab2}>
        About PLAB 2
      </Button>
      <Button style={{ margin: "15px" }} variant="contained" href={curriculum}>
        Our curriculum
      </Button>

      <Button
        style={{ margin: "15px" }}
        variant="contained"
        href={hematologyDemo}
      >
        <strong>Read our slides on hematology for free!</strong>
      </Button>
    </div>
  );
}
