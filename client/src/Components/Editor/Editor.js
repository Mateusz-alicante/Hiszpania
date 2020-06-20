import React from 'react'
import axios  from 'axios'

import { Resizable } from "re-resizable";

import EditorSource from './EditorConfig/EditorSource'


class Editor extends React.Component {
    
    state = {
        form: {
            title: "",
            subtitle: "",
            bodyHTML: "",
            imageURL: ""
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
        console.log(this.state)
    }

    submitMainImage = () => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/imageUpload/upload"); 
        xhr.onload = (event) => { 
            this.setState((oldState) => ({
                form: {
                    ...oldState.form,
                    imageURL: JSON.parse(event.target.response).url
                }
            })); // raw response
        }; 
        // or onerror, onabort
        var formData = new FormData(document.getElementById('mainImageForm')); 
        xhr.send(formData);

    }

    submitArticle = async () => {
        console.log("sending request")
        const data = this.state.form
        axios.post('/api/content/saveArticle', {
            ...data
        }).catch((e) => this.setState({status: e.response.data})).then((response) => console.log(response))
    }



    render() {
        return(
            <div>
                <p>New Article:</p>

                <form>
                    <input placeholder="Title of the article" type="text" value={this.state.form.title} onChange={(e) => this.onFormChange({title: e.target.value})} />
                    <input placeholder="subtitle of the article" type="text" value={this.state.form.subtitle} onChange={(e) => this.onFormChange({subtitle: e.target.value})} />
                </form>

                <form onSubmit={(e) => this.submitMainImage(e)} id="mainImageForm">        
                    <input type="file" name="upload" onChange={(e) => this.submitMainImage()}  />
                </form>

                <EditorSource onChange={(bodyHTML) => this.onFormChange({ bodyHTML })} />
                
                <Resizable style={{backgroundColor: "gray", marginLeft: "auto", marginRight: "auto"}} 
                defaultSize={{
                    width:1000,
                    height:2000,
                  }}>
                    <img src={this.state.form.imageURL} />
                    <h1>{this.state.form.title}</h1>
                    <h2>{this.state.form.subtitle}</h2>
                    <div className="ck-content" dangerouslySetInnerHTML={{__html: this.state.form.bodyHTML}} />
                </Resizable>

                <button onClick={this.submitArticle}>Submit</button>

                <p>{this.state.status}</p>
            </div>
        )
    }
}

export default Editor

// onChange={() => document.getElementById("mainImageForm").submit()}