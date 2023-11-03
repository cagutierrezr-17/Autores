// importando react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ListPage } from "./Pages/listPage/listPage";
import { CreatePage } from "./Pages/createPage/createPage";
import { UpdatePage } from "./Pages/updatePage/updatePage";
import "./App.css"


function App() {
  return (
    <div className="App">
  
      <BrowserRouter>

        <Routes>
    
          <Route path="/" element={<ListPage></ListPage>}></Route>
          <Route path="/new" element={<CreatePage></CreatePage>}></Route>
          <Route path="/edit/:id" element={<UpdatePage></UpdatePage>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;