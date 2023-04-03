import React from 'react';

type StringCounterType = {
    counter: number
    minValue: number
}

export const StringCounter: React.FC<StringCounterType> = (
    {counter, minValue}
) => {
    const stringCounterClass = counter === minValue ?
        <span className={'red-span'}>Limit of messages is exceeded</span>
        : counter === 1 ?
            "You can send only " + counter + " message"
            : "You can send only " + counter + " messages";
    return <h2>{stringCounterClass}</h2>
};