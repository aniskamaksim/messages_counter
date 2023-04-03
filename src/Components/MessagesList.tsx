import React from 'react';

type MessageArrayType = {
    id: string
    text: string
}

type MessageListType = {
    messages: MessageArrayType[],
}

export const MessagesList: React.FC<MessageListType> = (
    {messages}
) => {
    const messagesList = messages.length === 0 ? <h3 style={{color: "purple", fontStyle: "oblique"}}>No messages here yet</h3> : messages.map((element) => {
        return (
                <li key={element.id}><h3>{element.text}</h3></li>
        )
    })
    return <>{messagesList}</>
};