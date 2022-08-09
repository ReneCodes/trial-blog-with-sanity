import {BrowserRouter, Route, Routes as Switch} from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import Blog from "./pages/Blog"
import SinglePost from "./pages/SinglePost"
import Error from "./pages/Error"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route element={<Homepage/>} path="/" exact />
        <Route element={<SinglePost/>} path="/blog/:slug" />
        <Route element={<Blog/>} path="/blog" />
        <Route element={<Error/>} path="*" />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
