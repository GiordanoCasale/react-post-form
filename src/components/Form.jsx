import React from 'react'

// Componente Form che riceve formData, handleChange e onSubmit come props
const Form = ({ formData, handleChange, onSubmit }) => {
    return (
        // Container principale del form con classi Bootstrap grid e gestione onSubmit
        <form className="row g-3" onSubmit={onSubmit}>
            {/* Campo input per l'autore - occupa metà larghezza su schermi medi */}
            <div className="col-12 col-md-6">
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    className="form-control"
                    value={formData.author}
                    // Aggiorna il campo author in formData quando cambia
                    onChange={(e) => handleChange({
                        ...formData,
                        author: e.target.value
                    })}
                />
            </div>

            {/* Campo input per il titolo - occupa metà larghezza su schermi medi */}
            <div className="col-12 col-md-6">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="form-control"
                    value={formData.title}
                    // Aggiorna il campo title in formData quando cambia
                    onChange={(e) => handleChange({
                        ...formData,
                        title: e.target.value
                    })}
                />
            </div>

            {/* Area di testo per il contenuto - occupa metà larghezza su schermi medi */}
            <div className="col-12 col-md-6">
                <textarea
                    name="body"
                    placeholder="Body"
                    className="form-control"
                    value={formData.body}
                    // Aggiorna il campo body in formData quando cambia
                    onChange={(e) => handleChange({
                        ...formData,
                        body: e.target.value
                    })}
                />
            </div>

            {/* Checkbox per stato pubblico - occupa metà larghezza su schermi medi */}
            <div className="col-12 col-md-6">
                <div className="form-check">
                    <input
                        type="checkbox"
                        name="public"
                        className="form-check-input"
                        checked={formData.public}
                        // Aggiorna il campo public in formData quando viene spuntato/despuntato
                        onChange={(e) => handleChange({
                            ...formData,
                            public: e.target.checked
                        })}
                    />
                    <label className="form-check-label">Public</label>
                </div>
            </div>

            {/* Pulsante di invio - occupa tutta la larghezza */}
            <div className="col-12">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form