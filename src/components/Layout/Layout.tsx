import React from 'react';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Calorie Tracker</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>Calorie Tracker</p>
            </footer>
        </div>
    );
};

export default Layout;