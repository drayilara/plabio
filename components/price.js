import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";

export default function Price() {
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
      <h2 style={{ fontWeight: "600", margin: "10px 0 10px 0" }}>Price</h2>
      <h1 style={{ margin: "10px" }}>£ 220</h1>
      <Divider>
        <Chip label="OR PAY IN NAIRA" />
      </Divider>
      <h1 style={{ margin: "10px" }}>₦ 200,000</h1>

      <Alert variant="outlined" severity="info">
        <strong>
          Next cohort commences on the 16th of June - Only 10 slots available.
          Book now!
        </strong>
      </Alert>
    </div>
  );
}
