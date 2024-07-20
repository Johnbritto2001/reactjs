import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import SBAIHSS from "../module/schooladmissionform/sbaihss";
import Footer from "./footer";

const UrlRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ReactJs/src/module/schooladmissionform/sbaihss" element={<SBAIHSS />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default UrlRouter