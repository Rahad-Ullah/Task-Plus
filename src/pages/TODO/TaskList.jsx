import { FaPlus } from "react-icons/fa6";

import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const TaskList = ({ tasks, category, refetch, setTasks }) => {
    const {user} = useAuth()
    const axiosPublic  = useAxiosPublic()
  
    const handleAddTask = (e) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const title = form.get('title')
      const description = form.get('description')
      const deadline = form.get('deadline')
      const priority = form.get('priority')

      const message = {
        title,
        description,
        deadline,
        priority,
        category: 'To-Do',
        order: 0,
        email: user.email
      }
      console.log(message)

      axiosPublic.post('/tasks', message)
      .then(res => {
        if(res.data.insertedId){
          refetch();
          setTasks(tasks)
        }
      })
      
    }
  
  
  return (
    <div className='space-y-5'>
        <div className='p-4 bg-base-100 rounded-xl flex justify-between gap-5 items-center'>
            <p className='font-semibold text-lg text-indigo-600'>{category}</p>
            <button onClick={()=>document.getElementById('add_task_modal').showModal()} className="p-2 bg-indigo-100 rounded-lg hover:bg-indigo-200"><FaPlus className="text-indigo-500"/></button>
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

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="add_task_modal" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-xl text-center">Add Task</h3>
            <form onSubmit={handleAddTask}>
              <div className="form-control mb-1">
                  <label className="label">
                      <span className="label-text">Title</span>
                  </label>
                  <input  type="text" name="title" placeholder="Enter task title" className="input input-bordered" required />
              </div>
              <div className="form-control mb-1">
                  <label className="label">
                      <span className="label-text">Description</span>
                  </label>
                  <input  type="text" name="description" placeholder="Enter task description" className="input input-bordered" required />
              </div>
              <div className="form-control mb-1">
                  <label className="label">
                      <span className="label-text">Deadline</span>
                  </label>
                  <input  type="date" name="deadline" placeholder="Task deadline" className="input input-bordered" required />
              </div>
              <div className="form-control mb-1">
                  <label className="label">
                      <span className="label-text">Priority</span>
                  </label>
                  <select defaultValue={'Select priority'} name="priority" id="priority" className="input input-bordered" required>
                    <option value="Select priority" disabled>Select priority</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                  </select>
              </div>
              <button className="btn btn-primary w-full mt-2">Add</button>
            </form>
            <div className="modal-action">
              <form method="dialog" className="w-full">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-primary btn-outline w-full">Close</button>
              </form>
            </div>
          </div>
        </dialog>
    </div>
  );
};

export default TaskList;
