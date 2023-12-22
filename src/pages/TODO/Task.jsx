
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className='rounded-xl bg-base-100 p-4'
        >
            <span className={`p-3 py-1 rounded-md text-sm font-medium ${task.priority === 'High' ? 'bg-red-200' : task.priority === 'Low' ? 'bg-green-200' : 'bg-yellow-200'}`}>{task.priority}</span>
            <h2 className='font-medium mt-3'>{task.title}</h2>
            <p className='font-medium text-sm mt-2 text-[#768396] mb-4'>{task.description}</p>
            <span className='font-medium text-sm mt-4 p-1 px-3 border rounded'>{task.deadline}</span>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
