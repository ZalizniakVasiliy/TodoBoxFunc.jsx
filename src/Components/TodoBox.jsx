import React, {useState} from "react";
import Item from './Item';
import _ from 'lodash';
import cn from 'classnames';

const TodoBox = () => {
    const [noteValue, setNewNoteValue] = useState('');
    const [listNotes, setNewListNotes] = useState([]);

    const onChangeInput = (e) => {
        setNewNoteValue(e.target.value)
    };

    const handleAddNote = (e) => {
        e.preventDefault();
        const newNote = {content: noteValue.trim(), id: _.uniqueId()};
        setNewListNotes([newNote, ...listNotes]);
        setNewNoteValue('')
    };

    const handleRemoveNote = (taskId) => () => {
        const newListNotes = listNotes.filter(item => item.id !== taskId);
        setNewListNotes(newListNotes)
    }

    const activeAddBtn = cn('btn btn-primary',
        {'disabled': noteValue.trim() === ''});

    if (listNotes.length > 0) {
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input type="text"
                                   value={noteValue}
                                   required=""
                                   className="form-control"
                                   placeholder="I am going..."
                                   onChange={onChangeInput}/>
                        </div>
                        <button type="submit"
                                className={activeAddBtn}
                                onClick={handleAddNote}>add
                        </button>
                    </form>
                </div>
                <div>
                    {listNotes.map((item) => {
                        return <Item key={_.uniqueId()} onRemove={handleRemoveNote} task={item}/>
                    })}
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className="mb-3">
                <form className="d-flex">
                    <div className="me-3">
                        <input type="text"
                               value={noteValue}
                               required=""
                               className="form-control"
                               placeholder="I am going..."
                               onChange={onChangeInput}/>
                    </div>
                    <button type="submit"
                            className={activeAddBtn}
                            onClick={handleAddNote}>add
                    </button>
                </form>
            </div>
        </div>
    )

}

export default TodoBox;