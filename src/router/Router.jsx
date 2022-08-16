import { Routes, Route} from 'react-router-dom';
import Login from '../page/landing/Login';

const Router = () => {
    return(
        <Routes>
            <Route>
                <Route path='/' element={<Login />} />
            </Route>
        </Routes>
    ) 
}

export default Router;