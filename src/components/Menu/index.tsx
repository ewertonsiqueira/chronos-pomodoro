import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, Settings2Icon, SunIcon, TimerIcon } from 'lucide-react';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles['menu-link']} href="#">
        <HouseIcon size={34}/>
      </a>

      <a className={styles['menu-link']} href="#">
        <HistoryIcon size={34}/>
      </a>

      <a className={styles['menu-link']} href="#">
        <Settings2Icon size={34}/>
      </a>

      <a className={styles['menu-link']} href="#">
        <SunIcon size={34}/>
      </a>

    </nav>
  );
}