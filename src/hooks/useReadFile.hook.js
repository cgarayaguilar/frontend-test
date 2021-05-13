import Http from 'utils/http.util'
import { useLoader } from 'hooks'

/**
 * Función para leer un archivo y retornarlo en base64
 * @param {File} file - Archivo a leer y retornar en base64
 */
export default function useReadFile() {
    const [petition] = Http()
    const [loader] = useLoader()

    const getFile = fileId => {
        return new Promise(async (resolve, _) => {
            loader.show()
            petition
                .get(`/ecommerce/file/${fileId}`, {
                    responseType: 'arraybuffer',
                })
                .then(({ data, headers }) => {
                    const blob = new Blob([data], {
                        type: headers['content-type'],
                    })

                    resolve(blob)
                })
                .catch(error => console.error(error))
                .finally(() => {
                    loader.hide()
                })
        })
    }

    return { getFile }
}
