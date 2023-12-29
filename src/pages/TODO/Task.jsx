import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Draggable } from 'react-beautiful-dnd';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Task = ({ task, index, refetch, tasks, setTasks }) => {
  const axiosPublic = useAxiosPublic()
  const [currentTask, setCurrentTask] = useState({title: 'lalala'})
  const [lalaTask, setlalaTask] = useState('lalala')
  console.log('task from state', currentTask)

  // delete task
  const handleDelete = id => {
    axiosPublic.delete(`/tasks/${id}`)
    .then(res => {
      console.log(res.data)
      if(res.data.deletedCount){
        const remaining = tasks.filter(task => task._id !== id)
        console.log(remaining)
        setTasks(remaining)
        refetch();
        toast.success('Task Deleted')
      }
    })
  }

  // open edit modal
  const handleEditModal = task => {
    setCurrentTask(task)
    // setTimeout(() => {
    //   document.getElementById('edit_task_modal').showModal()
    // }, 3000);
  }

  // edit task
  const handleEditTask = (e) => {
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
      email: user.email
    }
    console.log(message)

    axiosPublic.patch(`/edit-task/${task._id}`, message)
    .then(res => {
      if(res.data.modifiedCount){
        refetch();
        const remaining = [...tasks]
        setTasks(remaining)
        toast.success('Task edited')
      }
    })
    
  }
  
  return (
    <div>
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
            <div className="flex justify-between items-center mt-4">
              <span className='font-medium text-sm p-1 px-3 border rounded'>{task.deadline}</span>
              <div className="flex gap-2 mx-1 items-center">
                <button onClick={() => handleEditModal(task)} className="btn btn-sm btn-circle btn-ghost hover:text-red-500 hover:cursor-pointer"><FiEdit  className="text-2xl p-1"/></button>
                <button onClick={() => handleDelete(task._id)} className="btn btn-sm btn-circle btn-ghost hover:text-red-500 hover:cursor-pointer"><MdDeleteOutline  className="text-xl "/></button>
              </div>
            </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="edit_task_modal" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-xl text-center">Edit Task</h3>
            <form onSubmit={handleEditTask}>
              <div className="form-control mb-1">
                  <label className="label">
                      <span className="label-text">Title</span>
                  </label>
                  <input  type="text" name="title" placeholder="Enter task title" defaultValue={currentTask?.title} className="input input-bordered" required />
              </div>
              <div className="form-control mb-1">
                  <label className="label">
                      <span className="label-text">Description</span>
                  </label>
                  <input  type="text" name="description" placeholder="Enter task description" defaultValue={task.description} className="input input-bordered" required />
              </div>
              <div className="form-control mb-1">
                  <label className="label">
                      <span className="label-text">Deadline</span>
                  </label>
                  <input  type="date" name="deadline" placeholder="Task deadline" defaultValue={task.deadline} className="input input-bordered" required />
              </div>
              <div className="form-control mb-1">
                  <label className="label">
                      <span className="label-text">Priority</span>
                  </label>
                  <select defaultChecked={task.priority} defaultValue={task.priority} name="priority" id="priority" className="input input-bordered" required>
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
      )}
    </Draggable>
    <Toaster/>
    </div>
  );
};

export default Task;
