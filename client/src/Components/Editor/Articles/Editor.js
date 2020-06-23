import React from 'react'
import axios from 'axios'


import EditorSource from '../../../Containers/Reusable/EditorConfig/EditorSource'
import { connect } from 'react-redux'

import styles from './Editor.module.css'
import { toast } from 'react-toastify';

import FileUpload from '../../../Containers/Reusable/FileUpload/FileUpload'
import ArticlePreview from '../../Main/Articles/Single/Single'

class Editor extends React.Component {

    state = {
        form: {
            title: "",
            subtitle: "",
            bodyHTML: "",
            imageURL: "",
            imageDescription: ""
        },
        status: undefined,
        imageStatus: undefined
    }

    onFormChange = (payload) => {
        this.setState((oldState) => ({
            form: {
                ...oldState.form,
                ...payload
            }
        }))
    }

    submitArticle = async () => {
        this.setState({status: 'loading'})
        const data = this.state.form
        const response = await axios.post('/api/content/saveArticle', {
            ...data,
        }, {
            headers: {
                authorization: this.props.redux.auth.token
            }
        })
        .catch((e) => {
            this.setState({ status: `Error: ${e.response.data}` })
            toast.error(`Wystąpił błąd podczas przesyłania artykułu. ${e.response.data} `)
        })
        
        if (response && response.status === 201) {
            toast.success("Artykuł został domyślnie przesłany, zostałeś przeniesiony do strony artykułu")
            this.props.history.push(`/articles/${response.data.id}`)
        }
    }

    handleImageUploaded = (url) => this.setState((oldState) => ({
        ...oldState,
        form: {
            ...oldState.form,
            imageURL: url
        }
    }))



    render() {
        return (
            <div>
                <h1 className={styles.topTitle}>Nowy artykuł:</h1>

                <form className={styles.form1}>
                    <label>Tytuł artykułu</label>
                    <input placeholder="Tytuł artykułu" type="text" value={this.state.form.title} onChange={(e) => this.onFormChange({ title: e.target.value })} />
                    <label>Opis artykułu</label>
                    <textarea placeholder="Opis artykułu" value={this.state.form.subtitle} onChange={(e) => this.onFormChange({ subtitle: e.target.value })} />
                </form>

                <FileUpload url="/api/imageUpload/upload" handleImageUploaded={this.handleImageUploaded} />
                <label className={styles.fileUploadLabel}>Opis obrazu:</label>
                <input className={styles.fileUploadDescription} type="text" placeholder="Description of the image" value={this.state.form.imageDescription} onChange={(e) => this.onFormChange({ imageDescription: e.target.value })} />

                <EditorSource className={styles.editor} onChange={(bodyHTML) => this.onFormChange({ bodyHTML })} />

                

                <div className={styles.previewContainer}>
                    <h1 className={styles.previewContainerTitle}>Preview:</h1>
                    <ArticlePreview load="fromProps" key={this.state.form.title}  data={{
                        title: this.state.form.title,
                        subtitle: this.state.form.subtitle,
                        image: this.state.form.imageURL,
                        imageDescription: this.state.form.imageDescription,
                        body: this.state.form.bodyHTML
                    }}/>
                </div>

                <button disabled={this.state.status === "loading"} className={styles.submitButton} onClick={this.submitArticle}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(Editor)
