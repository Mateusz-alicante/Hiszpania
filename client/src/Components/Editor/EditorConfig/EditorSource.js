import React from 'react'

import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import editorConfiguration from './EditorConfig'

import { connect } from 'react-redux'



class EditorSource extends React.Component {
  state = {
    editorConfig: undefined
  }

  componentWillMount() {
    this.setState({editorConfig: editorConfiguration(this.props.redux.auth.token)})
  }
  render() {

    return (
      <div>
        <CKEditor
          editor={ClassicEditor}
          config={this.state.editorConfig}
          onChange={(event, editor) => this.props.onChange(editor.getData())}
        />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    redux: state
  }
}

export default connect(mapStateToProps)(EditorSource)
