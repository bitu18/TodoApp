import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { useStore } from '../../store';
import { switchFilter, clearAllTodo } from '../../store/actions';

const cx = classNames.bind(styles);

function Footer() {
    const [state, dispatch] = useStore();
    let { todos, filters, filter } = state;

    const count = todos.filter((todo) => !todo.completed).length;
    const itemLeft = `item${count > 1 ? 's' : ''} left`;
    return (
        todos.length > 0 && (
            <footer className={cx('footer')}>
                <span className={cx('count')}>
                    <strong> {count} </strong>
                    {itemLeft}
                </span>
                <ul className={cx('filter')}>
                    <li className={cx('selection-lists')}>
                        <a
                            href="#/"
                            className={cx('selection-link', filter === 'all' && 'selected')}
                            onClick={() => dispatch(switchFilter('all'))}
                        >
                            All
                        </a>
                    </li>
                    <li className={cx('selection-lists')}>
                        <a
                            href="#/"
                            className={cx('selection-link', filter === 'active' && 'selected')}
                            onClick={() => dispatch(switchFilter('active'))}
                        >
                            Active
                        </a>
                    </li>
                    <li className={cx('selection-lists')}>
                        <a
                            href="#/"
                            className={cx('selection-link', filter === 'completed' && 'selected')}
                            onClick={() => dispatch(switchFilter('completed'))}
                        >
                            Completed
                        </a>
                    </li>
                    {/* {Object.keys(filters).map((type, index) => (
                        <li key={index} className={cx('selection-lists')}>
                            <a
                                href="#/"
                                className={cx('selection-link', filter === type && 'selected')}
                                onClick={() => dispatch(switchFilter(type))}
                            >
                                {type[0].toUpperCase() + type.slice(1)}
                            </a>
                        </li>
                    ))} */}
                </ul>
                {todos.some((todo) => todo.completed) && (
                    <button className={cx('clear-completed')} onClick={() => dispatch(clearAllTodo())}>
                        Clear Completed
                    </button>
                )}
            </footer>
        )
    );
}

export default Footer;
