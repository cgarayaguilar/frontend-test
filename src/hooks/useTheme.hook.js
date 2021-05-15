import { darkTheme, lightTheme } from 'store/initialState'
import useLocalStorage from 'hooks/useLocalStorage.hook'

const useInitialState = () => {
  const [theme, setTheme] = useLocalStorage('theme', lightTheme)
  const [isDarkModeActive, setIsDarkModeActive] = useLocalStorage(
    'isDarkModeActive',
    false
  )

  const activateDarkMode = () => {
    setTheme(darkTheme)
    setIsDarkModeActive(true)
  }

  const disableDarkMode = () => {
    setTheme(lightTheme)
    setIsDarkModeActive(false)
  }

  return {
    theme,
    isDarkModeActive,
    activateDarkMode,
    disableDarkMode,
  }
}

export default useInitialState
