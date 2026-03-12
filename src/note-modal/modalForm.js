import { useState } from "react";
import Button from "react-bootstrap/Button";

function ModalForm(props) {
    const currDate = new Date().toDateString();
	const [selectedDate, setSelectedDate] = useState(currDate);

	const handleDateChange = (event) => {
		setSelectedDate(event.target.value);
	};

    return (
        <form className="note-form">
            <div className="form-group readonly-field">
                <label htmlFor="note-date">Create date</label>
                <input type="text" name="note-date" value={selectedDate} id="note-date" className="form-control" onChange={handleDateChange} readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="note-name">Title</label>
                <input type="text" name="note-name" value={titleVal} onChange={(e) => onTitleValChange(e.target.value)} id="note-name" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="note-description">Description</label>
                <textarea id="note-description" value={descVal} onChange={(e) =>onDescValChange(e.target.value) } className="form-control"></textarea>
            </div>
            <div className="btn-holder">
                <Button variant="primary" className="add-note" onClick={ props.onHide }>Save Note</Button>
            </div>
        </form>
    );
}

export default ModalForm;