import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import './App.css';
import PageHeading from './page-heading';
import NoteBlock from './note-block';
import NoteModal from './note-modal';
import UpdateNoteModal from './note-modal/update-modal';

function App() {
	const [modalShow, setModalShow] = useState(false);
	const [updateModalShow, setUpdateModalShow] = useState(false);
	const [items, setItems] = useState([]);
	const [noteData, setNoteData] = useState({title: '', content: ''});

	useEffect(() => {
		const storedItems = localStorage.getItem('items');
		if (storedItems) {
			setItems(JSON.parse(storedItems));
		}
	}, []);

	const updateLocalStorage = (itemToBeSet) => {
		// Update localStorage with the new items
		localStorage.setItem('items', JSON.stringify(itemToBeSet));
	};

	//add new item
	const handleData = (e) => {
		const itemToBeSet = [...items, e];
		setItems(itemToBeSet)
		updateLocalStorage(itemToBeSet)

		// close modal
		setModalShow(false)
	}
	
	const handleUpdatedData = (e) => {
		let _index = e.indexToUpdate

		delete e.indexToUpdate

		items[_index] = e;

		setItems(items)
		updateLocalStorage(items)

		// close modal
		setUpdateModalShow(false);
	}

	//delete item 
	const handleDelete = (index) => {
		const itemToBeSet = [...items];
		itemToBeSet.splice(index, 1);
		setItems(itemToBeSet);
		updateLocalStorage(itemToBeSet);
	};

	const handleEditModal = (title, content, index) => {
		setNoteData({title, content, index});
		//show modal
		setUpdateModalShow(true);
	}

	const handleTitleChange = (newTitle) => {
        setNoteData((prevData) => ({...prevData, title: newTitle}));
    };

    const handleContentChange = (newContent) => {
        setNoteData((prevData) => ({...prevData, content: newContent}));
    };

	return (
		<>
			<div className="note-holder">
				<div className="note-holder-inner">
					<PageHeading name="Simple React Note" />

					<div className="button-holder">
						<Button variant="primary" onClick={() => setModalShow(true)}>Add note</Button>
					</div>

					<NoteBlock title={noteData.title} content={noteData.content} items={items} deleteItem={handleDelete} showUpdateModal={handleEditModal} />

				</div>
			</div>

			<NoteModal onhandleData={handleData} show={modalShow} onHide={() => setModalShow(false)} />

			<UpdateNoteModal onHandleUpdate={handleUpdatedData} show={updateModalShow} onHide={() => setUpdateModalShow(false)} noteData={noteData} title={noteData.title} content={noteData.content} onTitleChange={handleTitleChange} onContentChange={handleContentChange} />
		</>
	);
}

export default App;
