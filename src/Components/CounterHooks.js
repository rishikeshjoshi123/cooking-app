import React, { useContext, useState } from 'react'
import { C } from '../App'; // importing context (defined in top most component)
export default function CounterHooks(props) {
    const contextValue = useContext(C);// receiving value of context from Provider (defined in top most component)

    const [state, setState] = useState({ count: props.initCount });
    return (
        <>
            <div>
                <button onClick={() => { setState({ count: state.count - 1 }) }}>-</button>
                <span>{state.count}</span>
                <button onClick={() => { setState({ count: state.count + 1 }) }}>+</button>
            </div>
            <h3>Value received from context is -- {contextValue.msg1} and {contextValue.msg2}</h3>
        </>

    )
}