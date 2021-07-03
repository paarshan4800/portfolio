import styles from "./QR.module.css";
import React from "react";
import QRCode from "qrcode.react";

function QR() {
  return (
    <div className={`${styles.qr_container}`}>
      <QRCode value="https://www.google.com/" size={200} renderAs="svg" />
      <p>Scan this QR code to view my resume</p>
    </div>
  );
}

export default QR;
