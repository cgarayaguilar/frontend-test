import useLocalStorage from 'hooks/useLocalStorage.hook'
import { removeAuth, isAuth } from 'services/auth.service'

export default function useAuthUser() {
  //Estado que guarda la data del usuario autenticado
  const [authUserData, setAuthUserData] = useLocalStorage('authUserData', {})

  /**
   * @param  {Object} _data //recibe la informacion del usuario autenticado
   */
  const persistAuthUserData = _data => {
    setAuthUserData(_data)
  }

  return {
    authUserData,
    persistAuthUserData,
  }
}
