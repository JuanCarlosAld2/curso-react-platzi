import React from "react";
import ReactDOM from 'react-dom'

// portales 


function Alert({children}) {

    return ReactDOM.createPortal(
        <div className="ModalContainer">
              {/*elementps que se requiren teletrasportar */}

            {children}

        </div>,
        document.getElementById('alert')
    );

}

export {Alert}