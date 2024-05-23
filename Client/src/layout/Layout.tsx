import React from 'react';

interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            {/* <h1>Layout</h1> */}
            <div>{children}</div>
        </>
    );
};

export default Layout;
