import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {UniversalButton} from "./UniversalButton";
import TextField from "@mui/material/TextField";

type InputType = {
    addMessage: (text: string) => void
    minValue: number
    counter: number
}

export const Input: React.FC<InputType> = (
    {addMessage, minValue, counter}
) => {
    const [text, setText] = useState<string>("");
    const [error, setError] = useState<string | null>(null)


    const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value);
        setError(null)
    }
    const clearTextFieldHandler = () => {
        setText("")
    }
    const textTrimmed = text.trim()

    const enterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (textTrimmed.length !== 0) {
            if (e.key === 'Enter') {
                addMessage(textTrimmed)
                clearTextFieldHandler()
            } else if (e.key === 'Escape') {
                clearTextFieldHandler()
            }
        } else {
            setError("We need anything but the spaces")
            clearTextFieldHandler()
        }
    }

    const addNewMessageHandler = () => {
        if (textTrimmed.length > 0) {
            addMessage(textTrimmed);
            clearTextFieldHandler()
            setError(null)
        } else {
            setError("Enter your message")
        }
    }
    let addDisabled = counter === minValue;
    let inputClassChanger = error !== null ? 'input-error' : 'text-field';
    const isError = error?.length == 0;
    return (
        <>
            <div className={'input_buttons'}>
                <TextField
                    // className={inputClassChanger}
                    required
                    id="outlined-required"
                    label="Type your text here"
                    value={text}
                    onChange={changeEventHandler}
                    onKeyDown={enterPressHandler}
                    disabled={addDisabled}
                    size={'small'}
                    error={isError}
                />
                {/*<input*/}
                {/*    className={inputClassChanger}*/}
                {/*    value={text}*/}
                {/*    onChange={changeEventHandler}*/}
                {/*    onKeyDown={enterPressHandler}*/}
                {/*    disabled={addDisabled}*/}
                {/*/>*/}
                <UniversalButton
                    name={'Send'}
                    callBack={addNewMessageHandler}
                    isDisabled={addDisabled}
                    classVariant={"outlined"}/>
                <UniversalButton
                    name={'Reset'}
                    callBack={clearTextFieldHandler}
                    isDisabled={addDisabled}
                    classVariant={"outlined"}/>
            </div>
            <div className={'error-block'}>{error}</div>
        </>
    );
};