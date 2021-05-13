import { useState } from 'react'

export default function useModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    //Gestionar el modal
    const closeModal = () => setModalIsOpen(false)
    const openModal = () => setModalIsOpen(true)

    return { modalIsOpen, openModal, closeModal }
}
