import React from 'react';
import Counter from './Counter';

const App = ()=>{
    return (
        <>
        <Counter start={5} />
        <Counter start={12} />
        <Counter start={-21} />
        </>
    );
};
export default App;