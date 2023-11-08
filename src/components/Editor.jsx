import Toolbar from "./Toolbar";
import "../scss/editor.scss"
// import { useEffect, useState } from "react";

function Editor(props) {
    // const editor = document.getElementById("editor");
    // const previewWrapper = document.getElementById("preview-wrapper");
    // const [height, setHeight] = useState("88vh");
    // const [display, setDispplay] = useState("block");

    // useEffect(() => {
    //     document.getElementById("editor").style.height = height;
    //     document.getElementById("page-wrapper").style.display = display;
    // }, [display, height]);

    //const expand = () => {
        // setHeight("88vh");
        // setDispplay("none");
        // editor.style.height = "88vh";
        // previewWrapper.style.display = "none";
    //}

    //const collapse = () => {
        // setHeight("180px");
        // setDispplay("block");
        // editor.style.height = "180px";
        // previewWrapper.style.display = "block";
    //}

    const handleExpandCollapse = () => {
        props.handleExpand();
    }

    const handleChange = (event) => {
        props.onDataChange(event.target.value);
    }
    
    if (!props.previewer) {
        return (
            <div id="editor-wrapper" className="container-md p-0">
                <Toolbar title="Editor" expandOrCollapse={handleExpandCollapse}/>
                <code>
                    <textarea id="editor" spellCheck="false" className="container" defaultValue={props.data} onChange={handleChange} style={{ height: props.editorHeight }}>
                    </textarea>
                </code>
            </div>
        )
    }

    return null;
}

export default Editor