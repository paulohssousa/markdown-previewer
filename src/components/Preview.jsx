import Markdown from 'marked-react'
import Toolbar from './Toolbar'
import "../scss/preview.scss"

function Preview(props) {

    const handleExpandCollapse = () => {
        props.handleExpand();
    }

    if (!props.editor) {
        return (
            <div id="preview-wrapper" className="container-md" style={{display: props.displayMode }}>
                <Toolbar title="Previewer" expandOrCollapse={handleExpandCollapse}/>
                <div id="preview">
                    <Markdown value={props.data} gfm={true} breaks={true}/>
                </div>
            </div>
        )
    }

    return null;

}

export default Preview