const logger = (reducer) => {
    return (prevState, action) => {
        const nextState = reducer(prevState, action);
        console.group(action.type);
        console.log('Prev State:', prevState);
        console.log('Action:', action.payload);

        console.log('Next state:', nextState);
        console.groupEnd();
        return nextState;
    };
};

export default logger;
