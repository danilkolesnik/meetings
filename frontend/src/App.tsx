import React from 'react';
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes";

const AppRoutes = () => {
    return useRoutes(routes);
  };

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
