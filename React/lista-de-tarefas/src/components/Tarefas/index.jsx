import { FaEdit, FaWindowClose } from 'react-icons/fa'

export default function Tarefas(tarefas, handleEdit, handleDelete) {
    return (
        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
                <li key={index}>
                    {tarefa}
                    <span>
                        <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
                        <FaWindowClose className="delete" onClick={(e) => handleDelete(e, index)} />
                    </span>
                </li>
            ))}
        </ul>
    );
}