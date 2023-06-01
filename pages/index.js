import { useState, useEffect } from "react";
import List from "@/components/list";
import Price from "@/components/price";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import commitment from "../data/commitment.json";
import Links from "@/components/links";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { BsTelegram } from "react-icons/bs";
import AlertDialog from "@/components/alert_dialog";

export default function Plabio() {
  const [dialogState, setDialogState] = useState(false);
  const message = (
    <>
      Hi, we would love for you to join our webinar on{" "}
      <strong>10th of June, 2023.</strong>
      <br />
      <strong>
        Title: Passing PLAB 2 with Flying Colors: Insider Tips for First-Time Success.
      </strong>
      <br />
       Find out more{" "}
      <a style={{ color: "blue" }} href="https://t.me/+zEztjbYX4zIxYzc0">
        here
      </a>
    </>
  );

  useEffect(() => {
    const showDialogAfterDelay = () => {
      setDialogState(true);
    };

    setTimeout(() => {
      showDialogAfterDelay();
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Plabio - PLAB 2 academy</title>
        <meta name="author" content="Plabio PLAB 2 academy" />
        <meta
          name="description"
          content="Plabio is a PLAB 2 academy that offers quality coaching at the most affordable price on the market. We are your pathway to getting registered by the GMC"
        />
        <meta
          property="og:description"
          content="Plabio is a PLAB 2 academy that offers quality coaching at the most affordable price on the market. We are your pathway to getting registered by the GMC"
        />
        <meta
          property="og:title"
          content="Plabio - A high quality and affordable PLAB 2 academy"
        />
        <meta
          name="twitter:title"
          content="Plabio - A high quality and affordable PLAB 2 academy"
        />
        <meta
          name="twitter:description"
          content="Plabio is a PLAB 2 academy that offers quality coaching at the most affordable price on the market. We are your pathway to getting registered by the GMC"
        />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <div className="app-container">
        <AlertDialog
          initialState={dialogState}
          updater={setDialogState}
          message={message}
        />
        <h1 className={styles.brand}>Plabio</h1>
        <div
          className="header"
          style={{ fontWeight: "600", textAlign: "center", padding: "30px" }}
        >
          <h1>
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
            return (
              <List key={heading.toString()} heading={heading} desc={desc} />
            );
          })}
        </div>

        <Price />

        <Links />

        <div className={styles.price}>
          <h3 style={{ fontWeight: "600", margin: "10px 0 10px 0" }}>
            Contact Us
          </h3>
          <div style={{ fontSize: "30px" }}>
            <a href="https://t.me/+zEztjbYX4zIxYzc0">
              <BsTelegram style={{ margin: "10px" }} />
            </a>

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
