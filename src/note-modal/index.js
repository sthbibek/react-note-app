import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function NoteModal({onhandleData, ...props}) {
	const currDate = new Date().toDateString();
	const [selectedDate, setSelectedDate] = useState(currDate);

	const handleDateChange = (event) => {
		setSelectedDate(event.target.value);
	};

	const handleData = (e) => {
		const form = document.getElementById('todo_form');
		const formData = new FormData(form);

		const formObject = {};
		formData.forEach((value, key) => {
			formObject[key] = value;
		});

		onhandleData(formObject);
	}
	

	let titleVal, descVal;
    return (
		<Modal {...props} className="note-modal" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title>New Note</Modal.Title>
			</Modal.Header>

			<Modal.Body>
			<form className="note-form" id="todo_form">
				<div className="form-group readonly-field">
					<label htmlFor="note-date">Create date</label>
					<input type="text" name="note_date" value={selectedDate} id="note-date" className="form-control" onChange={handleDateChange} readOnly />
				</div>
				<div className="form-group">
					<label htmlFor="note-name">Title</label>
					<input type="text" name="note_name" value={titleVal} id="note-name" className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="note-description">Description</label>
					<textarea name="note_description" id="note-description" value={descVal}  className="form-control"></textarea>
				</div>
				<div className="btn-holder">
					<Button variant="primary" className="add-note" onClick={ (e) => handleData(e) }>Save Note</Button>
				</div>
			</form>
			</Modal.Body>
		</Modal>
    )
}

export default NoteModal;