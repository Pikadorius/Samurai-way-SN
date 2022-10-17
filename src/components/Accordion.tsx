import React from 'react';

type TechnologiesPropsType = {
    list: Array<string>
}

const Accordion = ({list}: TechnologiesPropsType) => {
    return (
        <div>
            {list.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </div>
    );
};

export default Accordion;