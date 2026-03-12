import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function UpdateNoteModal({onHandleUpdate, noteData, title, content, onTitleChange, onContentChange, ...props}) {
	const currDate = new Date().toDateString();
	const [selectedDate, setSelectedDate] = useState(currDate);

	const handleDateChange = (event) => {
		setSelectedDate(event.target.value);
	};

	const handleTitleChange = (e) => {
		onTitleChange(e.target.value);
	}
	
	const handleContentChange = (e) => {
		onContentChange(e.target.value);
	}

	const handleUpdateContent = (e) => {
		const form = document.getElementById('todo_edit_form');
		const formData = new FormData(form);

		const formObject = {};
		formData.forEach((value, key) => {
			formObject[key] = value;
		});

		onHandleUpdate(formObject);
	}	

    return (
		<Modal {...props} className="update-note-modal" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title>Update Note</Modal.Title>
			</Modal.Header>

			<Modal.Body>
			<form className="note-form" id="todo_edit_form">
				<div className="form-group readonly-field">
					<label htmlFor="note-date">Create date</label>
					<input type="text" name="note_date" value={selectedDate} id="note-date" className="form-control" onChange={handleDateChange} readOnly />
				</div>
				<div className="form-group">
					<label htmlFor="note-name">Title</label>
					<input type="text" name="note_name" value={title} id="note-name" className="form-control" onChange={handleTitleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="note-description">Description</label>
					<textarea name="note_description" id="note-description" value={content} className="form-control" onChange={handleContentChange}></textarea>
				</div>
				<input type="hidden" value={noteData.index} name="indexToUpdate"/>
				
				<div className="btn-holder">
					<Button variant="primary" className="update-note" onClick={() => handleUpdateContent()}>Update Note</Button>
				</div>
			</form>
			</Modal.Body>
		</Modal>
    )
}

export default UpdateNoteModal;