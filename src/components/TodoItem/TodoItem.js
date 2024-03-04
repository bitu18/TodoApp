import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './TodoItem.module.scss';

import today from '../../util/date';

import {
    toggleTodo,
    deleteTodo,
    startEditTodo,
    // setEditTodoInput,
    endEditTodo,
    cancelEditTodo,
} from '../../store/actions';

const cx = classNames.bind(styles);

function TodoItem({ index, todo, dispatch, isEditIndex }) {
    const [editText, setEditText] = useState(todo.title);

    const inputEditRef = useRef();
    useEffect(() => {
        if (isEditIndex) {
            inputEditRef.current.focus();
        }
    });

    const handleSetEditTodoInput = (e) => {
        setEditText(e.target.value);
    };

    const handleEndEdit = (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            dispatch(endEditTodo(index, e.target.value));
        } else if (e.key === 'Escape') {
            dispatch(cancelEditTodo(setEditText(todo.title)));
        }
    };
    const handleBlur = (e) => {
        if (e.target.value !== '') {
            dispatch(endEditTodo(index, e.target.value));
        }
    };
    return (
        <li className={cx('item', isEditIndex && 'editing')}>
            <div className={cx('view')}>
                <span
                    onClick={() => dispatch(toggleTodo(index))}
                    className={cx('check', todo.completed && 'checked')}
                ></span>
                <label
                    className={cx('todo-item', todo.completed && 'disabled')}
                    onDoubleClick={() => dispatch(startEditTodo(index))}
                >
                    {todo.title}
                </label>
                <span className={cx('date', todo.completed && 'disabled')}>{today}</span>
                <button className={cx('edit')} onClick={() => dispatch(startEditTodo(index))}>
                    <FontAwesomeIcon className={cx('icon')} icon={faPenToSquare} />
                </button>
                <button className={cx('delete')} onClick={() => dispatch(deleteTodo(index))}>
                    <FontAwesomeIcon className={cx('icon')} icon={faXmark} />
                </button>
            </div>

            <input
                ref={inputEditRef}
                className={cx('edit-input')}
                value={editText}
                onChange={handleSetEditTodoInput}
                onKeyDown={handleEndEdit}
                onBlur={handleBlur}
            />
            {/* <span className={cx('warning')}>Please Enter Your List</span> */}
        </li>
    );
}

export default TodoItem;
