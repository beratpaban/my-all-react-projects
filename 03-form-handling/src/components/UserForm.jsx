import {useEffect, useState} from "react";

const LOCAL_KEY = 'user-list';

function UserForm() {
    const [form, setForm] = useState({name: '', age: ''});
    const [users, setUsers] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_KEY);
        setUsers(stored ? JSON.parse(stored) : []);
    }, []);

    useEffect(() => {
        console.log('Saving to localStorage:', users); // 🔍 add this
        localStorage.setItem(LOCAL_KEY, JSON.stringify(users));
    }, [users]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.age.trim()) return;
        if (editingIndex === null) {
            setUsers((prev) => [...prev, form]);
        } else {
            const updatedUsers = [...users];
            updatedUsers[editingIndex] = form;
            setUsers(updatedUsers);
            setEditingIndex(null);
        }

        setForm({name: '', age: ''});
    };

    const handleDelete = (index) => {
        const updated = users.filter((_, i) => i !== index);
        setUsers(updated);
        if (editingIndex === index) {
            setEditingIndex(null);
            setForm({name: '', age: ''});
        }
    }

    const handleEdit = (index) => {
        setForm(users[index]);
        setEditingIndex(index);
    };

    const handleCancelEdit = () => {
        setForm({name: '', age: ''});
        setEditingIndex(null);
    };
    return (
        <div className="max-w-md mx-auto p-6 bg-white border rounded shadow space-y-4">
            <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                    <label className="block">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="border px-3 py-1 rounded w-full mt-1"
                            placeholder="Enter your name"/>
                    </label>
                </div>
                <div>
                    <label className="block">
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={form.age}
                            onChange={handleChange}
                            className="border px-3 py-1 rounded w-full mt-1"
                            placeholder="Enter your age"/>
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        {editingIndex === null ? 'Add User' : 'Update User'}
                    </button>
                    {editingIndex !== null && (
                        <button type="button" onClick={handleCancelEdit}
                                className="bg-gray-400 text-while px-4 py-2 rounded hover:bg-gray-500">
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            <div className="mt-4">
                <h3 className="font-bold mb-2">User List:</h3>
                {users.length === 0 ? (
                    <p className="text-gray-500">No users yet.</p>
                ) : (
                    <ul className="space-y-2">
                        {users.map((user, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center border-b pb-1"
                            >
                             <span>
                                {user.name} ({user.age} years old)
                                </span>
                                <div className="space-x-4 pl-5">
                                    <button
                                        onClick={() => handleEdit(index)}
                                        className="bg-green-600 rounded text-white px-3 py-0.5 hover:bg-green-700"
                                    >
                                        Edit
                                    </button>
                                     <button
                                        onClick={() => handleDelete(index)}
                                        className="bg-red-600 rounded text-white px-3 py-0.5 hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
                }
            </div>

        </div>
    )
}


export default UserForm;