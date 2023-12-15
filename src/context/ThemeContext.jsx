import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

function ThemeReducer(state, action) {
  switch (action.type) {
    case 'CHANGE MODE':
      return { ...state, mode: action.payload }
    default :
      return state
  }
}


export function ThemeProvider({ children }) {

  const [state, dispatch] = useReducer(ThemeReducer, { mode: 'light' })
  
  function changeMode(mode) {
    dispatch({
      type: 'CHANGE MODE',
      payload: mode
    })
  }

  return (
    
    <ThemeContext.Provider value={{...state, changeMode}}>
      {children}
    </ThemeContext.Provider>
  )
}