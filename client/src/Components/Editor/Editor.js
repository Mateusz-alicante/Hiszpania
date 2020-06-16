import React from 'react'

import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import editorConfiguration from './EditorConfig/EditorConfig'



class Index extends React.Component {
    state = {
        html: ""
    }
    render() {
        return (
            <div>
                <CKEditor
                editor={ClassicEditor}
                config={editorConfiguration}
                onChange={(event, editor) => {
                const data = editor.getData()
                this.setState({html: data})
                console.log(Array.from( editor.ui.componentFactory.names() ))
                }}
                 />
                 <div>
                    <h1>Data from editor</h1>
                    <div dangerouslySetInnerHTML={{__html: this.state.html}} />
                 </div>
            </div>
            
          )
    }
}
 
export default Index