import React from 'react';
import {UniversalButton} from "./UniversalButton";

type DeleteButtonType = {
    name: string
    deleteCallback: () => void
    counter?: number
    maxValue?: number
}

export const DeleteButton: React.FC<DeleteButtonType> = (
    {name, deleteCallback, counter, maxValue}
) => {
    const deleteCallbackHandler = () => {
        deleteCallback();
    }
    const classVariant = counter !== maxValue ? "contained" : "outlined";
    let addDisabledDelete = counter === maxValue;
    return (
        <div>
            <UniversalButton
                name={name}
                callBack={deleteCallbackHandler}
                classVariant={classVariant}
                isDisabled={addDisabledDelete}
            />
        </div>
    );
};