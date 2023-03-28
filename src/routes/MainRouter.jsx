import { Route, Routes } from 'react-router-dom';
import CallsProcesses from '../components/cards/callsProcesses/CallsProcesses';

import {
    ROUTE_SECTION_PROCESS
} from "../routes"

const MainRouter = () => {
    return(
        <Routes>
            <Route
                path={ROUTE_SECTION_PROCESS}
                element={<CallsProcesses />}
            />

        </Routes>
    )

}

export default MainRouter;