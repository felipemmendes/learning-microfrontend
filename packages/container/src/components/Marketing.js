import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/Marketing';

const Marketing = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    });

    return <div ref={ref} />;
}

export { Marketing };
