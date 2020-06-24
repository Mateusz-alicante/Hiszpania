import React from 'react'

import { connect } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'

import EditorSource from '../../../Reusable/EditorConfig/EditorSource'
import styles from './Editor.module.css'

class Editor extends React.Component {

    state = {
        pageBody: "",
        pageTitle: "",
        status: ""
    }

    submitPage = async () => {
        this.setState({status: 'loading'})
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
        }
    }

    render() {
        return (
            <div>
                <div className={styles.form1}>
                    <label>Nazwa Strony:</label>
                    <input type="text" required onChange={(e) => this.setState({ pageTitle: e.target.value })} />
                    <label>Edytuj strone:</label>
                    <EditorSource onChange={(bodyHTML) => this.setState({ pageBody: bodyHTML })} />
                </div>

                <div className={styles.preview}>
                    <h2>{this.state.pageTitle}</h2>
                    <div className="ck-content" dangerouslySetInnerHTML={{ __html: this.state.pageBody}} />
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