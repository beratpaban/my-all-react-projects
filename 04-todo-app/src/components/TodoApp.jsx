import {useState} from 'react';

function TodoApp() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const handleAdd = (e) => {
        e.preventDefault();
        if (task.trim() === '') return;
        setTodos((prev) => [...prev, {text: task, completed: false}]);
        setTask('');
    }

    const handleDelete = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }


    const handleToggleComplate = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? {...todo, completed: !todo.completed} : todo
        );
        setTodos((updatedTodos));
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true; // for 'all'
    });

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white p-6 rounded shadow space-y-6">
                <h1 className="text-2xl font-mono italic font-normal text-center  text-blue-500">My Todo App</h1>
                <form className="flex gap-2" onSubmit={handleAdd}>
                    <input type="text" placeholder="What do you need to do?"
                           className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                           value={task}
                           onChange={(e) => setTask(e.target.value)}
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:blue-600">Add
                    </button>
                </form>

                {/*TODO LIST */}
                <ul className="space-y-2">
                    {filteredTodos.map((todo, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center border-b pb-1"
                        >
                            <span className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.text}</span>
                            <div className="space-x-2">
                                <button
                                    onClick={() => handleToggleComplate(index)}
                                    className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600">{todo.completed ? 'Undo' : 'Done'}
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center gap-4 pt-2">
                    <button
                        onClick={() => setFilter('all')}
                        className={`text-sm ${filter === 'all' ? 'text-blue-700 underline' : 'text-blue-500 hover:underline'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('active')}
                        className={`text-sm ${filter === 'active' ? 'text-blue-700 underline' : 'text-blue-500 hover:underline'}`}
                    >
                        Active
                    </button>
                    <button
                        onClick={() => setFilter('completed')}
                        className={`text-sm ${filter === 'completed' ? 'text-blue-700 underline' : 'text-blue-500 hover:underline'}`}
                    >
                        Completed
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoApp;