
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskList from './TaskList';
import useAuth from '../../hooks/useAuth';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const {user} = useAuth()

  useEffect(() => {
    // Fetching tasks
    axios.get('/todos.json')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    console.log(result)

    if (!destination) {
      return;
    }

    const updatedTasks = [...tasks];
    const movedTask = updatedTasks.find(task => task._id === draggableId);

    // Updating the category and order of the moved task
    movedTask.category = destination.droppableId;
    movedTask.order = destination.index;

    // API request to update the task
    // axios.put(`/api/tasks/${draggableId}`, { category: destination.droppableId, order: destination.index })
    //   .catch((error) => {
    //     console.error('Error updating task:', error);
    //   });

    console.log(movedTask)
    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <h1 className='text-3xl font-semibold mb-8'>Tasks</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-between gap-5'>
            <TaskList tasks={tasks.filter(task => task.category === 'To-Do')} category="To-Do" />
            <TaskList tasks={tasks.filter(task => task.category === 'Ongoing')} category="Ongoing" />
            <TaskList tasks={tasks.filter(task => task.category === 'Completed')} category="Completed" />
        </div>
    </DragDropContext>
  );
};

export default Todo;
