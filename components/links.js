import Button from "@mui/material/Button";

export default function Links() {

  const aboutPlab2 =
    "https://docs.google.com/document/d/1JaAmO11LkKziv1eNqoVBYDMdzxSL7DMWl3d3hUxU5tM/edit?usp=sharing";

  const curriculum =
    "https://docs.google.com/document/d/1anAUPb085Wb8Mk4xVNCorHJfoNsxMQ4YVmqd2yk-C3k/edit?usp=sharing";
    
  return (
    <div
      style={{
        width: "30%",
        marginLeft: "30%",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "20px",
      }}
    >
      <h2
        style={{
          fontWeight: "600",
          margin: "10px 0 10px 0",
        }}
      >
        Resources
      </h2>
      <Button
        style={{ margin: "15px" }}
        variant="contained"
        href={aboutPlab2}
      >
        About PLAB 2
      </Button>
      <Button
        style={{ margin: "15px" }}
        variant="contained"
        href={curriculum}
      >
        Our curriculum
      </Button>
    </div>
  );
}
