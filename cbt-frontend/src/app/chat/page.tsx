'use client'

import { Button, Input, Space } from "antd"
import React, { useState } from "react"

import type { Message } from "@/app/types/types"
import ChatBubble from "@/app/chat/ChatBubble"

function ChatBotPage () {

    const [messages, setMessages] = useState<Message[]>([])
    const [value, setValue] = useState('')

    const sendMessage = () => {

        const newMsg:Message = {role:'user', content: value, date: new Date()}

        setMessages(prev => [...prev, newMsg])

        setValue('')

        // TODO: send to foundry

    }

    return (

        <>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    {messages.map((msg)=> 
                        <ChatBubble msg={msg}/>
                    )}
                    
                </div>

                <Space.Compact style={{ width: '100%' }}>
                    <Input
                        defaultValue="Type your message here ..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button type="primary" onClick={sendMessage}>
                            Send
                    </Button>
                </Space.Compact>

            </div>

            
        </>

    );
}

export default ChatBotPage