import "../scss/toolbar.scss"
import Button from "./Button";


function Toolbar(props) {
    
    return (
        <header id="toolbar" className="d-flex justify-content-between p-2">
            <span>{props.title}</span>
            <Button expandOrCollapse={props.expandOrCollapse}/>
        </header>

    )
}

export default Toolbar