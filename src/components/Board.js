import React from 'react'
import Task from './Task'

export default function Board({ board, boardIndex, moveLeft, moveRight, addTask, removeTask }) {
  return (
    <div className="col-3">
      <div className="text-white text-center bg-dark mb-3">

        <h1 className="card-title">{board.name}</h1>
        {board.tasks.map((task, taskIndex) =>
          <Task
            task={task}
            taskIndex={taskIndex}
            canMoveLeft={boardIndex !== 0}
            canMoveRight={boardIndex !== 3}
            key={taskIndex}
            moveLeft={() => moveLeft(taskIndex)}
            moveRight={() => moveRight(taskIndex)}
            removeTask={removeTask}
          />
        )}
        <button onClick={addTask} className="btn btn-success mx-auto">+</button>
      </div>
    </div>
  )
}
