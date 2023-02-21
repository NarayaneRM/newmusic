import { Route, Routes as RoutesDom } from "react-router-dom"

import Start from "./pages/start"
import Tutorial1 from "./pages/tutorial_1"
import Tutorial2 from "./pages/tutorial_2"
import Tutorial3 from "./pages/tutorial_3"

const Routes = () => {
  return (
    <RoutesDom>
    <Route index element={<Start />} />
    <Route path="tutorial1" element={<Tutorial1 />} />
    <Route path="tutorial2" element={<Tutorial2 />} />
    <Route path="tutorial3" element={<Tutorial3 />} />
  </RoutesDom>
  )
}

export default Routes