import React from 'react'
import Task from './Task'

export default function Board({ board, boardIndex, moveLeft, moveRight, addTask, removeTask }) {
  return (
    <div className="col">
      <h1>{board.name}</h1>
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
      <button onClick={addTask}>+</button>
    </div>
  )
}
