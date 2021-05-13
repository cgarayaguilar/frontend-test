import { useState } from 'react'

export default function useSesionStorage(key, initialValue) {
    const [storedValue, setValue] = useState(() => {
        try {
            const item = window.sessionStorage.getItem(key)
            return item !== null ? JSON.parse(item) : initialValue
        } catch (e) {
            return initialValue
        }
    })

    const setSesionStorage = value => {
        try {
            window.sessionStorage.setItem(key, JSON.stringify(value))
            setValue(value)
        } catch (e) {
            console.error(e)
        }
    }

    return [storedValue, setSesionStorage]
}
