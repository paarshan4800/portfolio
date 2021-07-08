import styles from "./QR.module.css";
import React from "react";
import QRCode from "qrcode.react";
import { RESUME } from "../../data/Resume";

function QR() {
  return (
    <div className={`${styles.qr_container}`}>
      <QRCode value={RESUME} size={200} renderAs="svg" />
      <p>Scan this QR code to view my resume</p>
    </div>
  );
}

export default QR;
