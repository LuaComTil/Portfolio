import Home from "./Sections/Home";
import { ThemeProvider } from "./Contexts/ThemeContext"
import "./styles/reset.css"
import "./styles/style.css"

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Home/>
      </ThemeProvider>
    </>
  )
}

export default App;
