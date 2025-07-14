import { useEffect } from 'react';

function Logger() {
    useEffect(() => {
        console.log('Logger component mounted!');
    }, []);

    return <p>Check the console!</p>;
}

export default Logger;