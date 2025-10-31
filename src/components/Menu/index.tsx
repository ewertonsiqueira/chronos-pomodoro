import styles from './styles.module.css'
import { HistoryIcon, HouseIcon, Settings2Icon, SunDimIcon, SunIcon, SunMoon } from 'lucide-react'
import { useState, useEffect } from 'react'

type MenuProps = 'dark' | 'light'

export function Menu() {
  const [theme, setTheme] = useState<MenuProps>(() => {
    const localStorageTheme = localStorage.getItem('theme') as MenuProps
    return localStorageTheme === 'light' ? 'light' : 'dark'
  })

  function toggleTheme(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault() // não vai navegar para lugar nenhum

    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)

    document.documentElement.setAttribute('data-theme', theme)
    return () => {
      // cleanup (opcional)
    }
  }, [theme]) // Executa sempre que a variável de tema mudar

  return (
    <nav className={styles.menu}>
      <a className={styles['menu-link']} href="#"
        aria-label='Ir para Home' title='Ir para Home'>
        <HouseIcon size={34}/>
      </a>

      <a className={styles['menu-link']} href="#"
        aria-label='Ir para Histórico' title='Ir para Histórico'>
        <HistoryIcon size={34}/>
      </a>

      <a className={styles['menu-link']} href="#"
        aria-label='Ir para Configurações' title='Ir para Configurações'>
        <Settings2Icon size={34}/>
      </a>

      <a
        className={styles['menu-link']}
        href="#"
        aria-label='Ir para Tema'
        title='Ir para Tema'
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <SunIcon size={34}/> : <SunMoon size={34}/>}
      </a>
    </nav>
  )
}
