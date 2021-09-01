import React, { useEffect, useRef } from 'react';
import { mount as marketingMount } from 'marketing/Marketing';

const Marketing = () => {
    const ref = useRef(null);

    useEffect(() => {
        marketingMount(ref.current);
    }, []);

    return <div ref={ref} />;
}

export { Marketing };
