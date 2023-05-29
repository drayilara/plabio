import List from "@/components/list";
import Price from "@/components/price";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import commitment from "../data/commitment.json";
import Links from "@/components/links";

export default function Plabio() {
  return (
    <>
      <div className="app-container">
        <h1
          style={{
            margin: "20px 0 20px 100px",
            fontWeight: "400",
            padding: "20px",
          }}
        >
          Plabio
        </h1>
        <div
          style={{ fontWeight: "600", textAlign: "center", padding: "70px" }}
        >
          <h1 className="header">
            Unlock Your Future in UK Medicine. <br /> Gain The Confidence You
            Need to Conquer The PLAB 2 Exam.
          </h1>
          <p style={{ fontWeight: "400", marginTop: "5px" }}>
            Empowering Physicians to Ace the PLAB 2 Exam and Embark on a
            Fulfilling Journey in UK Medicine.
          </p>
        </div>

        <div>
          <h2 style={{ fontWeight: "400", textAlign: "center" }}>
            Our core commitments to our students
          </h2>

          {/* A list of core servces here */}
          {commitment.commitments.map((com) => {
            const { heading, desc } = com;
            return <List key={heading.toString()} heading={heading} desc={desc} />;
          })}
        </div>

        <Price />

        <Links />

        <div
          style={{
            width: "30%",
            marginLeft: "30%",
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ fontWeight: "600", margin: "10px 0 10px 0" }}>
            Contact Us
          </h3>
          <div style={{ fontSize: "30px", cursor: "pointer" }}>
            <a href="mailto:ayilarasodiq1@gmail.com?subject=Enquiries About PLAB 2 From Plabio Website">
              <MdEmail style={{ margin: "10px" }} />
            </a>

            <a href="tel: +2349052403088">
              <BsTelephoneFill style={{ margin: "10px" }} />
            </a>

            <a href="https://wa.me/+2349052403088?text=I%20am%20interested%20in%20Plabio">
              <RiWhatsappFill style={{ margin: "10px" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
