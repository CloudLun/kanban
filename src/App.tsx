import { useState, useEffect, useReducer } from "react";

import { BrowserRouter, RouterProvider, Routes } from "react-router-dom";

import Nav from "./components/Nav";


import { DarkThemeProvider } from "./Context/ThemeContext";

export type boardActions = 'board_select' | 'edit_board_card' | 'edit_board' | 'add_new_task' | 'delete_board'

function App() {

  const [boardsShown, setBoardsShown] = useState({
    boardSelect: false,
    editBoardCard: false,
    editBoard: false,
    deleteBoard: false,
    addNewTask: false,
    backgroundBlur: false,
  })


  const boardsClickHandler = (type: boardActions) => {
    switch (type) {
      case 'board_select':
        setBoardsShown({ ...boardsShown, boardSelect: true, backgroundBlur: true })
        break
      case 'edit_board_card':
        setBoardsShown({ ...boardsShown, editBoardCard: true, backgroundBlur: true })
        break
      case 'edit_board':
        setBoardsShown({ ...boardsShown, editBoardCard: false, addNewTask: true, backgroundBlur: true })
        break
      case 'add_new_task':
        setBoardsShown({ ...boardsShown, deleteBoard: true, backgroundBlur: true })
        break
      case 'delete_board':
        setBoardsShown({ ...boardsShown, deleteBoard: true, backgroundBlur: true })
        break
      default:
        throw new Error("cannot found this action type");
    }
  }

  const defaultWebpageHandler = () => {
    setBoardsShown({
      boardSelect: false,
      editBoardCard: false,
      editBoard: false,
      deleteBoard: false,
      addNewTask: false,
      backgroundBlur: false,
    })

  }

  return (
    <div className="relative font-jarkata" >
      <DarkThemeProvider >
        {boardsShown.backgroundBlur ? <div className="absolute top-[0px]  w-[100vw] h-[100vh] bg-black bg-opacity-[50%] z-40" onClick={defaultWebpageHandler}></div> : null}
        <Nav boardSelect={boardsShown.boardSelect} editBoardCard={boardsShown.editBoardCard} boardsClickHandler={boardsClickHandler} />
        {/* <BrowserRouter>
          <Routes>
            
          </Routes>
        </BrowserRouter> */}
        {/* <Board boardSelect={boardsShown.boardSelect} addNewTask={boardsShown.addNewTask} editBoard={boardsShown.editBoard} deleteBoard={boardsShown.deleteBoard} mobile={mobile} tablet={tablet} desktop={desktop} /> */}
      </DarkThemeProvider>
    </div>
  );
}

export default App;
