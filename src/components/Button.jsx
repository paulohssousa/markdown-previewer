import { useState } from "react";
import "../scss/button.scss"

function Button(props) {
    const[buttonType, setButtonType] = useState(true)

    const handleButton = () => {
        props.expandOrCollapse();
        setButtonType(!buttonType);
    }

    if (buttonType) {
        return <button onClick={handleButton}><i className="bi bi-arrows-expand"></i>Expand</button>
    } else {
        return <button onClick={handleButton}><i className="bi bi-arrows-collapse"></i>Collapse</button>
    }
}

export default Button