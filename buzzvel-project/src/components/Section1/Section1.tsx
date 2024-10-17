import React from 'react';
import Button from '../Button/Button';

type Section1 = unknown

const Section1: React.FC<Section1> = () => {
    return (
        <div className="">
        Section1 Component
        <Button text="Request a Quote"/>
        </div>
    );
};

export default Section1;