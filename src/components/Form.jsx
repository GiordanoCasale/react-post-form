import React from 'react'

const Form = ({ formData, handleChange }) => {
    return (
        <div className="row g-3">
            <div className="col-12 col-md-6">
                <input
                    type="text"
                    placeholder="Author"
                    className="form-control"
                    value={formData.Author}
                    onChange={(e) =>
                        handleChange({ ...formData, Author: e.target.value })
                    }
                />
            </div>
            <div className="col-12 col-md-6">
                <input
                    type="text"
                    placeholder="Title"
                    className="form-control"
                    value={formData.title}
                    onChange={(e) =>
                        handleChange({ ...formData, title: e.target.value })
                    }
                />
            </div>
            <div className="col-12 col-md-6">
                <input
                    type="text-area"
                    placeholder="body"
                    className="form-control"
                    value={formData.body}
                    onChange={(e) =>
                        handleChange({ ...formData, body: e.target.value })
                    }
                />
            </div>
            <div className="col-12 col-md-6">
                <input
                    type="check-box"
                    placeholder="public"
                    className="form-control"
                    value={formData.public}
                    onChange={(e) =>
                        handleChange({ ...formData, public: e.target.value })
                    }
                />
            </div>
        </div>
    )
}

export default Form
