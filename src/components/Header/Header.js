import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { useStore, actions } from '../../store';
import { addTodo, setTodoInput, toggleAllTodo } from '../../store/actions';

const cx = classNames.bind(styles);

function Header() {
    const [state, dispatch] = useStore();
    let { todos, todoInput } = state;

    const inputRef = useRef();

    const handleEnter = (e) => {
        if (e.key === 'Enter' && todoInput !== '') {
            dispatch(addTodo(todoInput));
            dispatch(setTodoInput(''));
            inputRef.current.focus();
        }
    };
    const isAllTodosSelected = todos.every((todo) => todo.isCompleted);
    const noTodoClass = todos.length === 0 ? 'hidden' : '';
    return (
        <>
            <div className={cx('wrapper')}>
                <h1 className={cx('title')}>todos</h1>
                <div className={cx('header-wrapper')}>
                    <button
                        className={cx('btn-toggle', { noTodoClass }, isAllTodosSelected && 'checked')}
                        onClick={() => dispatch(toggleAllTodo())}
                    >
                        <FontAwesomeIcon className={cx('icon-toggle')} icon={faAngleDown} />
                    </button>
                    <div className={cx('input-wrapper')}>
                        <input
                            value={todoInput}
                            placeholder="What needs to be done?"
                            ref={inputRef}
                            className={cx('input')}
                            onChange={(e) => {
                                dispatch(actions.setTodoInput(e.target.value));
                            }}
                            onKeyDown={(e) => handleEnter(e)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
