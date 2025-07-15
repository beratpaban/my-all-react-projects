import {useEffect, useState} from "react";

function AdviceGenerator() {
    const [advice,setAdvice] = useState('');
    const [history,setHistory] = useState([]);
    const [loading,setLoading] = useState(true);

    const fetchAdvice =async ()=>{
    setLoading(true);
    try{
        const response = await fetch('https://api.adviceslip.com/advice',{
            cache: 'no-cache',
        });
        const  data = await response.json();
        setAdvice(data.slip.advice);
        setHistory(prev => [data.slip.advice, ...prev]);
    }catch (error){
        setAdvice('Could not fetch advice. Please try again.'+ {error});
    }finally {
        setLoading(false);
    }
    };

    useEffect(()=>{
        fetchAdvice();
    },[]);

    return <div className="p-6 max-w-md mx-auto bg-white border rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">Random Advice</h2>
        {loading ? (<p>Loading...</p>):(
            <p className="italic text-gray-800">"{advice}"</p>
        )}
        <button onClick={fetchAdvice} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Get New Advice</button>
        <div className="mt-6">
            <h3 className="font-bold mb-2">Advice History:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            {history.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
    </div>
}

export default AdviceGenerator;