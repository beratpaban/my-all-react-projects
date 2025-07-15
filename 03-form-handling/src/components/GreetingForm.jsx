import {useState} from "react";

function GreetingForm() {
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');
    const [age, setAge] = useState('');
    const [submittedAge, setSubmittedAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedName(name);
        setName(''); // clear input
        setSubmittedAge(age);
        setAge('');// clear input
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white border rounded shadow space-y-4">
            <form onSubmit={handleSubmit} className="space-y-2">
                <label className="block">
                    Your Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border px-3 py-1 rounded w-full mt-1"
                        placeholder={'Enter your name'}
                    />
                </label>

                <label className="block">
                    Your Age:
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="border px-3 py-1 rounded w-full mt-1"
                        placeholder={'Enter your age'}
                    />
                </label>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>

            </form>
            {submittedName && (<p className="text-lg font-medium">Hello, {submittedName} {submittedAge}! </p>)}
        </div>
    );
}

export default GreetingForm;