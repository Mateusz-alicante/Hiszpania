import React from 'react'

import styles from './FileUpload.module.css'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';
import axios from 'axios'

class FileUpload extends React.Component {
    state = {
        imagestatus: undefined
    }
    submitMainImage = async () => {
        var formData = new FormData(document.getElementById('mainImageForm'));

        this.setState({imageStatus: "loading"})

        const response = await axios.post(this.props.url, formData, {
            headers: {
                authorization: this.props.redux.auth.token
            }
        }).catch((e) => {
            toast.error(`Wystąpił błąd: ${e.response.data} `)
            this.setState({imageStatus: "error"})
        })

        if (response && response.status === 200) {
            this.setState({imageStatus: "done"})
            this.props.handleImageUploaded(response.data.url)
        }
        
    }

    render() {
        return (
            <form className={styles.fileForm} onSubmit={(e) => this.submitMainImage(e)} id="mainImageForm">
                <div className={styles.fileInputContainer}>
                    <input className={styles.fileInput} type="file" id="fileInput" accept="image/*" name="upload" onChange={(e) => this.submitMainImage()} />
                    <label className={styles.fileLabel} htmlFor="fileInput">
                        <span id={styles.photoIcon} className="material-icons">add_photo_alternate</span>Upload a file</label>
                    {this.state.imageStatus === "loading" && <span id={styles.lodingStatusIndicator} className="material-icons">cached</span>}
                    {this.state.imageStatus === "done" && <span id={styles.doneStatusIndicator} className="material-icons">done</span>}
                    {this.state.imageStatus === "error" && <span id={styles.errorStatusIndicator} className="material-icons">error</span>}

                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(FileUpload)