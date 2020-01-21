import React from 'react'

export default ({ task, taskIndex }) => {
  return (
    <div className="card-body">
      <button className="btn btn-light">Left</button>
      <h4 className="card-title">{task.name}
        <button className="btn btn-danger"></button>
      </h4>
      <button className="btn btn-light">Right</button>
    </div>
  )
}
