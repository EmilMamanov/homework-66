import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            Here will be meal page
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;