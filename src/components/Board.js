import React from 'react'
import Task from './Task'

export default function Board(
  board,
  boardIndex,
  // moveTask
  // addTask
  // removeTask
) {
  return (
    <div className="col-3">
      <div className="card">
        <h1 className="card-title">{board.name}</h1>
        {board.tasks.map((task, taskIndex) =>
          <Task
            task={task}
            taskIndex={taskIndex}
            key={taskIndex}
          // removeTask={removeTask}
          />
        )}
        {/* <button onClick={addTask} className="btn btn-success card-footer">+</button> */}
      </div>
    </div>
  )
}
