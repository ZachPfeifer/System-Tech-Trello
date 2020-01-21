import React, { Component } from 'react'
import Board from './components/Board'


const LEFT = -1
const RIGHT = 1

export default class App extends Component {
  //SECTION STATE 
  constructor(props) {
    super(props)
    this.state = {

      boards: [
        {
          name: "Would be Nice",
          tasks: [
            {
              name: "Task A"
              //IUUD MAYBE
            }
          ]
        },
        {
          name: "To Do",
          tasks: [
            {
              name: "Task B"
              //IUUD MAYBE
            }
          ]
        },
        {
          name: "In Progress",
          tasks: [
            {
              name: "Task C"
              //IUUD MAYBE
            }
          ]
        },
        {
          name: "Completed",
          tasks: [
            {
              name: "Task D"
              //IUUD MAYBE
            }
          ]
        },
      ]
    }
  }

  //SECTION HANDLES
  handleAdd = boardIndex => {
    const name = window.prompt('name')
    if (!name) { return }
    debugger
    const task = { name }
    this.setState(prevState => {
      const { boards } = this.state
      boards[boardIndex].tasks.push(task)
      return { boards }
    })
  }
  handleDelete() {

  }
  handleMove = (boardIndex, taskIndex, direction) => {
    this.setState(prevState => {
      const { boards } = prevState
      const [task] = boards[boardIndex].tasks.splice(taskIndex, 1)
      boards[boardIndex + direction].tasks.push(task)
      return { boards }
    })
  }

  //SECTION APP
  render() {
    return (
      <div className="App row">
        {this.state.boards.map((board, boardIndex) => (
          <Board
            board={board}
            boardIndex={boardIndex}
            key={boardIndex}
            moveLeft={taskIndex => this.handleMove(boardIndex, taskIndex, LEFT)}
            moveRight={taskIndex => this.handleMove(boardIndex, taskIndex, RIGHT)}
            addTask={() => this.handleAdd(boardIndex)}
          // removeTask={}
          />
        )
        )}
      </div>
    )
  }
}
