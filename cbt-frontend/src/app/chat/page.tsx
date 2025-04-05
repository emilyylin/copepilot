'use client'

import { Button, Input, Space } from "antd"
import React, { useState, useEffect } from "react"

import type { Message } from "@/types/types"
import ChatBubble from "@/app/chat/ChatBubble"

const url = process.env.NEXT_PUBLIC_BACKEND_API_URL

function ChatBotPage () {

    const [messages, setMessages] = useState<Message[]>([])
    const [value, setValue] = useState('')

    // load message history on mount
    // TODO: create custom hook
    useEffect(() => {
        const loadMessages = async () => {
            try {
                const res = await fetch(`${url}/messages`)
                const data = await res.json();
                
                setMessages(data)

            } catch ( err ) {
                console.error("Failed to fetch thought records: ", err)
            } 
        }
        loadMessages();
    }, [])

    const sendMessage = async () => {

        const newMsg:Message = {role:'user', content: value, date: new Date()}

        setMessages(prev => [...prev, newMsg])

        try {
            await fetch(`${url}/saveMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMsg),
            })
        } catch (err) {
            console.error("Failed to save message: ", err)
        }

        setValue('')

        // fetch response from chatbot
        try {
            const res = await fetch(`${url}/llmResponse?content=${encodeURIComponent(value)}`);
            const data = await res.json();
          
            const botMsg: Message = {
              role: "chatbot",
              content: data.chatbot_output,
              date: new Date(),
            };
          
            setMessages(prev => [...prev, botMsg]);
          
            // save chatbot message
            try {
                await fetch(`${url}/saveMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(botMsg),
                })
            } catch (err) {
                console.error("Failed to save message: ", err)
            }
          
        } catch (err) {
        console.error("Failed to get or save chatbot response:", err);
        }

    }

    return (

        <>
            <div className="flex flex-col">
                <div className="flex flex-col gap-2">
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