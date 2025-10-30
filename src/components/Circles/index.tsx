import styles from './styles.module.css'

export function Circles() {
  return (
    <div className={styles.circles}>
      <span>
        Ciclos
      </span>
      <div className={styles.cyclesDots}>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDot} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  )
}
