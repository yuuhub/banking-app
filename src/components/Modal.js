import React from 'react'

function Modal({ closeModal }) {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button onClick={() => closeModal(false)}>X</button>
                <div className='body'>
                    <p>modal test</p>
                </div>
                <div className='footer'>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <button>continue</button>
                </div>
            </div>
        </div>
    )}

export default Modal
