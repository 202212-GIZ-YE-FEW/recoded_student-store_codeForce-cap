import { HashLoader } from "react-spinners"

import styles from "./spinner.module.css"

const Spinner = ({ text }) => (
  <div className={styles.wrapper}>
    <HashLoader color='#eeeeee' size={80} />
    {text && <p className={styles.loadingText}>{text}</p>}
  </div>
)

export default Spinner
