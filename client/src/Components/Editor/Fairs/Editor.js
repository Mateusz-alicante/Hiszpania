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
import FairPreview from '../../Main/Fairs/Single/Single'




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

        if (this.props.match.params.action == 'new') {
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
                this.props.history.push(`/fairs/${response.data.id}`)
            }
        } else {
            const response = await axios.post('/api/content/updateFair', {
                ...data,
                id: this.props.match.params.action
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
                console.log(response)
                toast.success("Strona została domyślnie przesłana, zostałeś przeniesiony do artykułu")
                this.props.history.push('/fairs/' + this.props.match.params.action)
            }
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

    componentDidMount() {
        if (this.props.match.params.action != 'new') {
            this.fetchArticleData()
        }
    }

    fetchArticleData = async (id) => {
        const response = await axios.get('/api/content//loadSingleFair?id=' + this.props.match.params.action)
            .catch((e) => toast.error(`Wystąpił błąd podczas ładowania targów. ${e} `))


        if (response.status == 200) {
            const data = response.data

            console.log(data)
            this.setState({
                form: {
                    title: data.title,
                    subtitle: data.subtitle,
                    bodyHTML: data.body,
                    imageURL: data.image,
                    imageDescription: data.imageDescription,
                    location: data.location,
                    startDate: moment(data.startDate),
                    endDate: moment(data.endDate),
                    category: data.category
                }
            })
        }
    }



    render() {
        const formData = this.state.form
        return (
            <div>
                <h1 className={styles.topTitle}>Nowe targi:</h1>


                <form className={styles.form1}>
                    <label>Nazwa targów</label>
                    <input placeholder="Tytuł targów" type="text" value={formData.title} onChange={(e) => this.onFormChange({ title: e.target.value })} />
                    <label>Opis targów</label>
                    <textarea placeholder="Opis targów" value={formData.subtitle} onChange={(e) => this.onFormChange({ subtitle: e.target.value })} />
                    <label>Kategoria targów</label>
                    <input placeholder="Kategoria targów" type="text" value={formData.category} onChange={(e) => this.onFormChange({ category: e.target.value })} />

                    <div>
                        <label>Wybierz date rozpoczęcia i zakończenia targów:</label>
                        <DateRangePicker
                            startDate={formData.startDate}
                            endDate={formData.endDate}
                            startDateId="your_unique_start_date_id"
                            endDateId="your_unique_end_date_id"
                            onDatesChange={this.handleDateChange} // PropTypes.func.isRequired,
                            focusedInput={this.state.dateSelectorFocused}
                            onFocusChange={focusedInput => this.setState({ dateSelectorFocused: focusedInput })}
                            isOutsideRange={() => false}
                        />
                        <label>Wybierz położenie targów:</label>
                        <input placeholder="Położenie targów" type="text" value={formData.location} onChange={(e) => this.onFormChange({ location: e.target.value })} />
                    </div>

                </form>
                <label className={styles.fileUploadLabel}>Wybierz obraz:</label>
                <FileUpload url="/api/imageUpload/upload" handleImageUploaded={this.handleImageUploaded} />
                <label className={styles.fileUploadLabel}>Opis obrazu:</label>
                <input className={styles.fileUploadDescription} type="text" placeholder="Description of the image" value={formData.imageDescription} onChange={(e) => this.onFormChange({ imageDescription: e.target.value })} />

                <EditorSource data={this.state.form.bodyHTML} className={styles.editor} onChange={(bodyHTML) => this.onFormChange({ bodyHTML })} />



                <div className={styles.previewContainer}>
                    <h1 className={styles.previewContainerTitle}>Preview:</h1>
                    <FairPreview load="fromProps" key={formData.title} data={{
                        title: formData.title,
                        subtitle: formData.subtitle,
                        image: formData.imageURL,
                        imageDescription: formData.imageDescription,
                        body: formData.bodyHTML,
                        location: formData.location,
                        startDate: formData.startDate,
                        endDate: formData.endDate,
                        category: formData.category
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
