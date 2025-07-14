import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="grid gap-4 pt-3">
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>
        </div>
    );
}

export default Counter;