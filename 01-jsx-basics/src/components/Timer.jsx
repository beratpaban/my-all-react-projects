import {useEffect, useState} from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000)
        return () => clearInterval(interval)
    }, []);

    return <p>Seconds passed : {seconds}</p>
}

export default Timer;