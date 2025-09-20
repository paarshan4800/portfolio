import styles from "./Loader.module.css";

function Loader({ message }) {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.loader}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* {message && <p className={`${styles.loader_text}`}>{message}</p>} */}
    </div>
  );
}

export default Loader;
