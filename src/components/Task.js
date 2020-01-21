import React from 'react'

export default ({ task, canMoveLeft, canMoveRight, moveLeft, moveRight, removeTask, taskIndex }) => {
  return (
    <div className="card-body">
      <span>
        {canMoveLeft && <button onClick={moveLeft} className="btn btn-primary"> Left </button>}
        <h4 className="title">{task.name}
          <button onClick={() => removeTask(taskIndex)} className="btn btn-danger"> - </button>
        </h4>
        {canMoveRight && <button onClick={moveRight} className="btn btn-primary"> Right </button>}
      </span>

    </div>
  )
}

