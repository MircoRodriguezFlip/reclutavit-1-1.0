import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Navbar } from './components/common/Navbar';
import { Cargando } from './components/utils/cargando';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './hooks/ScrollTop';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const JobsPage = lazy(() => import('./components/pages/JobsPage'));
const PoliticasPage = lazy(() => import('./components/pages/PoliticasPage'));
const ErrorPage = lazy(() => import('./components/pages/ErrorPage'));

const routes = [
    { path: '/', id: 1, element: <LandingPage /> },
    { path: '/vacantes/:id?', id: 2, element: <JobsPage /> },
    { path: '/politica-privacidad', id: 3, element: <PoliticasPage /> },
    { path: '*', id: 4, element: <ErrorPage /> },
];

function App() {
    return (
        <BrowserRouter basename="/reclutavit-1-1.0">
            <ScrollToTop />

            <Navbar />

            <Routes>
                {routes.map(({ path, element, id }) => (
                    <Route
                        key={id}
                        path={path}
                        element={
                            <Suspense
                                fallback={
                                    <div className="cargando">
                                        <Cargando />
                                    </div>
                                }
                            >
                                {element}
                            </Suspense>
                        }
                    />
                ))}
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
