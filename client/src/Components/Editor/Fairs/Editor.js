import React from 'react'
import axios from 'axios'

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment'
import { withRouter } from 'react-router-dom'

import EditorSource from '../../../Containers/Reusable/EditorConfig/EditorSource'
import { connect } from 'react-redux'

import styles from './Editor.module.css'
import { toast } from 'react-toastify';

import FileUpload from '../../../Containers/Reusable/FileUpload/FileUpload'
import ArticlePreview from '../../Main/Articles/Single/Single'

 


moment.locale('pl'); 

class Editor extends React.Component {

    state = {
        form: {
            title: "",
            subtitle: "",
            bodyHTML: "",
            imageURL: "",
            imageDescription: "",
            location: "",
            startDate: null,
            endDate: null,
            category: ""
        },
        status: undefined,
        imageStatus: undefined,
        dateSelectorFocused: null
    }

    onFormChange = (payload) => {
        this.setState((oldState) => ({
            form: {
                ...oldState.form,
                ...payload
            }
        }))
    }

    submitFair = async () => {
        this.setState({ status: 'loading' })
        const data = this.state.form
        const response = await axios.post('/api/content/saveFair', {
            ...data,
            startDate: data.startDate.toDate(),
            endDate: data.endDate.toDate()
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

    handleDateChange = ({ startDate, endDate }) => {
        this.setState((oldState) => ({
            ...oldState,
            form: {
                ...oldState.form,
                startDate,
                endDate
            }
        }))
    }



    render() {
        return (
            <div>
                <h1 className={styles.topTitle}>Nowy artykuł:</h1>


                <form className={styles.form1}>
                    <label>Nazwa targów</label>
                    <input placeholder="Tytuł targów" type="text" value={this.state.form.title} onChange={(e) => this.onFormChange({ title: e.target.value })} />
                    <label>Opis targów</label>
                    <textarea placeholder="Opis targów" value={this.state.form.subtitle} onChange={(e) => this.onFormChange({ subtitle: e.target.value })} />
                    <label>Kategoria targów</label>
                    <input placeholder="Kategoria targów" type="text" value={this.state.form.category} onChange={(e) => this.onFormChange({ category: e.target.value })} />

                    <div>
                    <label>Wybierz date rozpoczęcia i zakończenia targów:</label>
                    <DateRangePicker
                        startDate={this.state.form.startDate}
                        endDate={this.state.form.endDate}
                        startDateId="your_unique_start_date_id" 
                        endDateId="your_unique_end_date_id" 
                        onDatesChange={this.handleDateChange} // PropTypes.func.isRequired,
                        focusedInput={this.state.dateSelectorFocused}
                        onFocusChange={focusedInput => this.setState({ dateSelectorFocused: focusedInput })}
                        isOutsideRange={() => false}
                    />
                    <label>Wybierz położenie targów:</label>
                    <input placeholder="Położenie targów" type="text" value={this.state.form.location} onChange={(e) => this.onFormChange({ location: e.target.value })} />
                    </div>

                </form>
                <label className={styles.fileUploadLabel}>Wybierz obraz:</label>
                <FileUpload url="/api/imageUpload/upload" handleImageUploaded={this.handleImageUploaded} />
                <label className={styles.fileUploadLabel}>Opis obrazu:</label>
                <input className={styles.fileUploadDescription} type="text" placeholder="Description of the image" value={this.state.form.imageDescription} onChange={(e) => this.onFormChange({ imageDescription: e.target.value })} />

                <EditorSource className={styles.editor} onChange={(bodyHTML) => this.onFormChange({ bodyHTML })} />



                <div className={styles.previewContainer}>
                    <h1 className={styles.previewContainerTitle}>Preview:</h1>
                    <ArticlePreview load="fromProps" key={this.state.form.title} data={{
                        title: this.state.form.title,
                        subtitle: this.state.form.subtitle,
                        image: this.state.form.imageURL,
                        imageDescription: this.state.form.imageDescription,
                        body: this.state.form.bodyHTML
                    }} />
                </div>

                <button disabled={this.state.status === "loading"} className={styles.submitButton} onClick={this.submitFair}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(withRouter(Editor))
