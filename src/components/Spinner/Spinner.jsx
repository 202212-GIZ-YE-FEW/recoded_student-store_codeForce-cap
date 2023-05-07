// components/Loader.js
import { HashLoader } from "react-spinners"

import styles from "./loader.module.css"

const Spinner = () => (
  <div className={styles.wrapper}>
    <HashLoader color='#eeeeee' size={80} />
  </div>
)

export default Spinner
