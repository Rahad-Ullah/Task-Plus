import { FaPlus } from "react-icons/fa6";

import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const TaskList = ({ tasks, category }) => {
  return (
    <div className='space-y-5'>
        <div className='p-4 bg-base-100 rounded-xl flex justify-between gap-5 items-center'>
            <p className='font-semibold text-lg text-indigo-600'>{category}</p>
            <button className="p-2 bg-indigo-100 rounded-lg hover:bg-indigo-200"><FaPlus className="text-indigo-500"/></button>
        </div>
        <Droppable droppableId={category} key={category}>
        {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} 
            className=' space-y-5'>
            {tasks.map((task, index) => (
                <Task key={task._id} task={task} index={index} />
            ))}
            {provided.placeholder}
            </div>
        )}
        </Droppable>
    </div>
  );
};

export default TaskList;
