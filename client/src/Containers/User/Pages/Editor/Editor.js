import React from 'react'

import { connect } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'

import EditorSource from '../../../Reusable/EditorConfig/EditorSource'
import styles from './Editor.module.css'

import {setRender} from '../../../../Components/Utils/Redux/Actions/Render'

class Editor extends React.Component {

    state = {
        pageBody: "",
        pageTitle: "",
        status: "",
        pageId: ""
    }

    componentDidMount() {
        if (this.props.match.params.action != 'new') {
            this.fetchData(this.props.match.params.action)
        }
    }

    fetchData = async (id) => {
        const response = await axios.get('/api/content/loadPage/' + id)
            .catch((e) => toast.error(`Wystąpił błąd podczas ładowania strony. ${e} `))


        if (response.status == 200) {
            const data = response.data

            this.setState({
                pageTitle: data.title,
                pageBody: data.body,
                pageId: data._id
            })
        }
    }

    submitPage = async () => {
        this.setState({ status: 'loading' })
        if (this.props.match.params.action == 'new') {
            const response = await axios.post('/api/content/savePage', {
                title: this.state.pageTitle,
                body: this.state.pageBody
            }, {
                headers: {
                    authorization: this.props.redux.auth.token
                }
            })
                .catch((e) => {
                    this.setState({ status: `Error: ${e.response.data}` })
                    toast.error(`Wystąpił błąd podczas przesyłania strony. ${e.response.data} `)
                })

            if (response && response.status === 201) {
                toast.success("Strona została domyślnie przesłana, zostałeś przeniesiony do strony")
                this.props.history.push('/customPage/' + response.data.url)
                this.props.dispatch(setRender('header', true))
            }
        } else {
            const response = await axios.post('/api/content/updatePage', {
                title: this.state.pageTitle,
                body: this.state.pageBody,
                id : this.state.pageId
            }, {
                headers: {
                    authorization: this.props.redux.auth.token
                }
            })
                .catch((e) => {
                    this.setState({ status: `Error: ${e.response.data}` })
                    toast.error(`Wystąpił błąd podczas przesyłania strony. ${e.response.data} `)
                })

            if (response && response.status === 201) {
                toast.success("Strona została domyślnie przesłana, zostałeś przeniesiony do strony")
                this.props.history.push('/customPage/' + response.data.url)
                this.props.dispatch(setRender('header', true))
            }
        }
    }

    render() {
        return (
            <div>
                <div className={styles.form1}>
                    <label>Nazwa Strony:</label>
                    <input type="text" required value={this.state.pageTitle} onChange={(e) => this.setState({ pageTitle: e.target.value })} />
                    <label>Edytuj strone:</label>
                    <EditorSource data={this.state.pageBody} onChange={(bodyHTML) => this.setState({ pageBody: bodyHTML })} />
                </div>

                <div className={styles.preview}>
                    <h2>{this.state.pageTitle}</h2>
                    <div className="ck-content" dangerouslySetInnerHTML={{ __html: this.state.pageBody }} />
                </div>

                <button disabled={this.state.status === "loading"} onClick={this.submitPage} className={styles.submitButton}>Prześlij</button>

            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(Editor)