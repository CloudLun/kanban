import { useState, useEffect } from "react";

import Nav from "./Components/Nav";
import Board from "./Components/Board/Board";

import { DarkThemeProvider } from "./Context/ThemeContext";

function App() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const [boardsShown, setBoardsShown] = useState({
    boardSelect: false,
    editBoardCard: false,
    editBoard: false,
    deleteBoard: false,
    addNewTask: false,
    backgroundBlur: false,
  })

  const desktop: boolean = windowWidth > 1024
  const tablet: boolean = windowWidth > 768
  const mobile: boolean = windowWidth < 768

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const boardSelectsShownHandler = () => {
    setBoardsShown({ ...boardsShown, boardSelect: true, backgroundBlur: true })
  }

  const editBoardCardHandler = () => {
    setBoardsShown({ ...boardsShown, editBoardCard: true, backgroundBlur: true })
  }

  const addNewTaskHandler = () => {
    setBoardsShown({ ...boardsShown, editBoardCard: false, addNewTask: true, backgroundBlur: true })
  }

  const editBoardHandler = () => {
    setBoardsShown({ ...boardsShown, editBoardCard: false, editBoard: true, backgroundBlur: true })
  }

  const deletBoardHandler = () => {
    setBoardsShown({ ...boardsShown, deleteBoard: true, backgroundBlur: true })
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
        <Nav boardSelect={boardsShown.boardSelect} editBoardCard={boardsShown.editBoardCard} boardSelectsShownHandler={boardSelectsShownHandler} editBoardCardHandler={editBoardCardHandler} addNewTaskHandler={addNewTaskHandler} editBoardHandler={editBoardHandler} deletBoardHandler={deletBoardHandler} desktop={desktop} tablet={tablet} mobile={mobile} />
        <Board boardSelect={boardsShown.boardSelect} addNewTask={boardsShown.addNewTask} editBoard={boardsShown.editBoard} deleteBoard={boardsShown.deleteBoard} mobile={mobile} tablet={tablet} desktop={desktop} />
      </DarkThemeProvider>
    </div>
  );
}

export default App;
