import React from 'react'

export default ({ task, canMoveLeft, canMoveRight, moveLeft, moveRight, removeTask, taskIndex }) => {
  return (
    <div className="card-body">
      <span className="">
        <h4 className="title">
          {canMoveLeft && <button onClick={moveLeft} className="btn btn-primary m-1"> Left </button>}

          {task.name}

          <button onClick={() => removeTask(taskIndex)} className="btn btn-danger ml-3"> - </button>


          {canMoveRight && <button onClick={moveRight} className="btn btn-primary m-1"> Right </button>}
        </h4>
      </span>

    </div>
  )
}

