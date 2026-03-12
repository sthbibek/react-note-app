import NoteItem from './noteItem';

function NoteBlock({ items, deleteItem, showUpdateModal, title, content, onClick }) {

  return (
    
    <div className={`note-list-holder${items.length < 1 ? ' empty' : ''}`}>
    {items.length > 0 ? (
      <div className="note-list">
        {
          items.map((item, index) => (
            <NoteItem key={index} index={index} noteDate={item.note_date} titleVal={item.note_name} descVal={item.note_description} deleteNote={deleteItem} editModal={showUpdateModal} onClick={() => onClick(title, content, index)} />
          )) 
        }

      </div>
    ) : (
      <div className="empty-note">No Notes available.</div>
    )}
    </div>
  )
}

export default NoteBlock;