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
      <h1>{board.name}</h1>
      {board.tasks.map((task, taskIndex) =>
        <Task
          task={task}
          taskIndex={taskIndex}
          canMoveLeft={boardIndex !== 0}
          canMoveRight={boardIndex !== 3}
          key={taskIndex}
        // removeTask={removeTask}
        />
      )}
      {/* <button onClick={addTask} className="btn btn-primary">+</button> */}
    </div>
  )
}
