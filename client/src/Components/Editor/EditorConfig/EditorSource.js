import React from 'react'

import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import editorConfiguration from './EditorConfig'



const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };
  

const EditorSource = (props) => (
            <div>
                <CKEditor
                editor={ClassicEditor}
                config={editorConfiguration}
                onChange={(event, editor) => props.onChange(editor.getData())}
                 />

            </div>
            
)
// <div>
// <h1>Data from editor</h1>
// <Resizable style={style}>

//     <div className="ck-content" dangerouslySetInnerHTML={{__html: this.state.html}} />
// </Resizable>
    

// </div>
 
export default EditorSource