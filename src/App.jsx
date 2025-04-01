import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { LandingPage } from './components/pages/LandingPage';
import { ScrollToTop } from './hooks/ScrollTop';

function App() {
    return (
        <BrowserRouter basename="/reclutavit-1-1.0">
            <ScrollToTop />

            <Navbar />

            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
