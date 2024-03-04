import classNames from 'classnames/bind';
import styles from './Todolist.module.scss';
import { useState } from 'react';
import { useStore } from '../../store';
import TodoItem from '../TodoItem/TodoItem';

const cx = classNames.bind(styles);

function Todolist() {
    const [state, dispatch] = useStore();
    let { todos, filter, isEditIndex, editValueInput } = state;

    const followFilter = () => {
        if (filter === 'active') {
            return todos.filter((todo) => !todo.completed);
        } else if (filter === 'completed') {
            return todos.filter((todo) => todo.completed);
        }
        return todos;
    };
    const getVisibleTodos = followFilter();

    return (
        <section className={cx('main')}>
            <ul className={cx('list')}>
                {getVisibleTodos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        index={index}
                        todo={todo}
                        dispatch={dispatch}
                        isEditIndex={isEditIndex === index}
                        editValueInput={editValueInput}
                    />
                ))}
            </ul>
        </section>
    );
}

export default Todolist;
