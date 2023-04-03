import React, {useState} from 'react';
import './App.css';
import {StringCounter} from "./Components/StringCounter";
import {Input} from "./Components/Input";
import {DeleteButton} from "./Components/DeleteButton";
import {MessagesList} from "./Components/MessagesList";
import {v1} from "uuid";
import {Paper} from "@mui/material";

export type MessageType = {
    id: string
    text: string
}

function App() {
    const [messages, setMessages] = useState<MessageType[]>([])
    const [counter, setCounter] = useState<number>(5)
    const maxValue = 5;
    const minValue = 0;

    const addNewMessage = (text: string) => {
        let message = {id: v1(), text: text}
        let newMessage = [message, ...messages]
        messages.length < maxValue ? setMessages(newMessage) : setMessages(messages)
    }
    const sendMessageCount = (text: string) => {
        addNewMessage(text);
        counter > minValue && counter <= maxValue ? setCounter(counter - 1) : setCounter(minValue);
    }
    const deleteLastMessage = () => {
        messages.shift();
        setMessages(messages);
        counter < maxValue ? setCounter(counter + 1) : setCounter(maxValue);
    }
    const deleteAllMessages = () => {
        setMessages([]);
        setCounter(5)
    }

    return (
        <div className={"wrapper"}>
            <div className="counter">
                <StringCounter
                    counter={counter}
                    minValue={minValue}
                />
            </div>
            <div className="input">
                <Input
                    addMessage={sendMessageCount}
                    minValue={minValue}
                    counter={counter}/>
            </div>
            <div className="messages-list">
                <MessagesList
                    messages={messages}
                />
            </div>
            <div className="delete-button">
                <DeleteButton
                    name={'Delete last message'}
                    deleteCallback={deleteLastMessage}
                    counter={counter}
                    maxValue={maxValue}
                />
                <DeleteButton
                    name={'Clear list'}
                    deleteCallback={deleteAllMessages}
                    counter={counter}
                    maxValue={maxValue}
                />
            </div>
        </div>
    );
}

export default App;
