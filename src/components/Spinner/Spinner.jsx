import { HashLoader } from "react-spinners"

import styles from "./spinner.module.css"

const Spinner = () => (
  <div className={styles.wrapper}>
    <HashLoader color='#eeeeee' size={80} />
  </div>
)

export default Spinner
