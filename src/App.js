import React, { Component } from 'react'
import Board from './components/Board'

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
  handleAdd() {

  }
  handleDelete() {

  }
  handleMove() {

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
          // movetask={}
          // addTask={}
          // removeTask={}
          />
        )
        )}
      </div>
    )
  }
}
