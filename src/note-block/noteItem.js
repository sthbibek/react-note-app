import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Button from "react-bootstrap/Button";
import { useState } from 'react';

function NoteItem({ index, noteDate, titleVal, descVal, deleteNote, editModal }) {
    const [activeCls, seActiveCls] = useState(false);
    const handleDelete = () => {
        deleteNote(index);
    }

    const handleEditModal = () => {
        editModal(titleVal, descVal, index);
    }

    const toggleClass = () => {
        seActiveCls(!activeCls);
    }

    return (
        <div className={`note-item${activeCls ? ' active' : ''}`}>
            <div className="note-header" onClick={toggleClass}>
                <h3 className="note-title">{ titleVal }</h3>
                <span className="note-tgl-icon">
                    <FontAwesomeIcon icon={ faPlus }/>
                    <FontAwesomeIcon icon={ faMinus }/>
                </span>
            </div>
            <div className={`note-desc${!activeCls ? ' d-none' : ''}`}>{ descVal }</div>
            <div className="note-footer">
                <span className="note-curr-date-holder">
                    <b>Created on: </b>
                    <span className="note-curr-date">{ noteDate }</span>
                </span>
                <div className="note-action">
                    <Button variant='success' className='edit-note' onClick={handleEditModal}>
                        <FontAwesomeIcon icon={ faPencilAlt }/>
                    </Button>
                    <Button variant='danger' className='delete-note' onClick={handleDelete}>
                        <FontAwesomeIcon icon={ faTrashAlt }/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;