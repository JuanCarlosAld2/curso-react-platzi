import React from "react";
import ReactDOM from 'react-dom'

// portales 


function Modal({children}) {

    return ReactDOM.createPortal(
        <div className="ModalContainer">
              {/*elementps que se requiren teletrasportar */}

            {children}

        </div>,
        document.getElementById('modal')
    );

}

export {Modal}