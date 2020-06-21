import React from 'react'
import axios from 'axios'

import { Resizable } from "re-resizable";

import EditorSource from './EditorConfig/EditorSource'
import { connect } from 'react-redux'


class Editor extends React.Component {

    state = {
        form: {
            title: "",
            subtitle: "",
            bodyHTML: "",
            imageURL: "",
            imageDescription: ""
        },
        status: undefined
    }

    onFormChange = (payload) => {
        this.setState((oldState) => ({
            form: {
                ...oldState.form,
                ...payload
            }
        }))
    }

    submitMainImage = async () => {
        var formData = new FormData(document.getElementById('mainImageForm'));

        const response = await axios.post('/api/imageUpload/upload', formData, {
            headers: {
                authorization: this.props.redux.auth.token
            }
        })

        this.setState((oldState) => ({
            form: {
                ...oldState.form,
                imageURL: response.data.url
            }
        }))
    }

    submitArticle = async () => {
        console.log("sending request")
        const data = this.state.form
        axios.post('/api/content/saveArticle', {
            ...data,
        }, { 
            headers: { 
                authorization: this.props.redux.auth.token 
            }})
        .catch((e) => this.setState({ status: e.response.data }))
    }



    render() {
        return (
            <div>
                <p>New Article:</p>

                <form>
                    <input placeholder="Title of the article" type="text" value={this.state.form.title} onChange={(e) => this.onFormChange({ title: e.target.value })} />
                    <input placeholder="subtitle of the article" type="text" value={this.state.form.subtitle} onChange={(e) => this.onFormChange({ subtitle: e.target.value })} />
                </form>

                <form onSubmit={(e) => this.submitMainImage(e)} id="mainImageForm">
                    <input type="file" accept="image/*" name="upload" onChange={(e) => this.submitMainImage()} />
                    <input type="text" placeholder="Description of the image" value={this.state.form.imageDescription} onChange={(e) => this.onFormChange({ imageDescription: e.target.value })} />
                </form>

                <EditorSource onChange={(bodyHTML) => this.onFormChange({ bodyHTML })} />

                <Resizable style={{ backgroundColor: "gray", marginLeft: "auto", marginRight: "auto" }}
                    defaultSize={{
                        width: 1000,
                        height: 2000,
                    }}>
                    <img src={this.state.form.imageURL} />
                    <h1>{this.state.form.title}</h1>
                    <h2>{this.state.form.subtitle}</h2>
                    <div className="ck-content" dangerouslySetInnerHTML={{ __html: this.state.form.bodyHTML }} />
                </Resizable>

                <button onClick={this.submitArticle}>Submit</button>

                <p>{this.state.status}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(Editor)

// onChange={() => document.getElementById("mainImageForm").submit()}