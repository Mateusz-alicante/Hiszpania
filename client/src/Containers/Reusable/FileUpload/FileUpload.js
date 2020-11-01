import React from 'react'

import styles from './FileUpload.module.css'
import { toast } from 'react-toastify';
import axios from 'axios'
import isURL from 'validator/es/lib/isURL';

import { connect } from 'react-redux'

class FileUpload extends React.Component {

    state = {
        imagestatus: undefined,
        imageURL: this.props.imageURL
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
          imageURL: nextProps.imageURL
        };
      }

    submitMainImage = async () => {
        var formData = new FormData(document.getElementById('mainImageForm'));

        this.setState({ imageStatus: "loading" })

        const response = await axios.post(this.props.url, formData
            , {
                headers: {
                    authorization: this.props.redux.auth.token
                }
            }
        ).catch((e) => {
            toast.error(`An error occurred: ${e.response.data} `)
            this.setState({ imageStatus: "error" })
        })

        if (response && response.status === 200) {
            this.setState({ imageStatus: "done" })
            this.setState({ imageURL: response.data.url })
            this.props.handleImageUploaded(response.data.url)
        }

    }

    enteredImageURL = async (e) => {
        e.preventDefault()
        if (isURL(e.target.value)) {
            this.setState({ imageURL: e.target.value, imageStatus: "done" })
            this.props.handleImageUploaded(e.target.value)
            console.log(this.state)
        } else {
            this.setState({imageStatus: 'error'})
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
                <div>
                    <label>Or enter an URL</label>
                    <input defaultValue={this.state.imageURL} onChange={this.enteredImageURL} type="text" />
                </div>
                <div>
                    <img src={this.state.imageURL} />
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    redux: state
})

export default connect(mapStateToProps)(FileUpload)
