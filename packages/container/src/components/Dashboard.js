import React, { useEffect, useRef } from 'react';
import { mount } from 'dashboard/Dashboard';

const Dashboard = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref} />;
}

export { Dashboard };
