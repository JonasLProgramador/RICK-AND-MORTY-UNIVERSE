import { Route, Routes} from "react-router-dom";
import MainPage from "../view/mainPage";
import CharacterPage from "../view/characterPage";

const AppRoutes = () =>{
    return(
        
            <Routes>
                <Route path="/"element={<MainPage/>}/>, 
                <Route path="/character" element={<CharacterPage/>}/>
            </Routes>
       
    )
}
   

export default AppRoutes