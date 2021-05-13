import { encodeToken, decodeToken } from 'utils/token-cipher.util'

/**
 * Save the user token
 * @param {String} token
 * */
function saveToken({ token }) {
  try {
    let secureToken = encodeToken(token)
    localStorage.setItem('_tkn', secureToken)
  } catch (error) {
    console.error(error)
  }
}

/**
 * Return the user token value in header formatting
 * @return {Object}
 */
function getToken() {
  if (!isAuth()) return ''

  try {
    let secureToken = localStorage.getItem('_tkn')
    let token = decodeToken(secureToken)

    return `Bearer ${token}`
  } catch (error) {
    console.error(error)
    return ''
  }
}

/**
 * Check is user token exist
 * @return {Boolean}
 */
function isAuth() {
  return localStorage.getItem('_tkn') !== null
}

export { saveToken, getToken, isAuth }
