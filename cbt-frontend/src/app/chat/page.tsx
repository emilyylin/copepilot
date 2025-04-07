'use client'

import { Input } from "antd"
import React, { useState, useEffect, useRef } from "react"
import { Send } from 'lucide-react'

import type { Message } from "@/types/types"
import ChatBubble from "@/app/chat/ChatBubble"

const url = process.env.NEXT_PUBLIC_BACKEND_API_URL

function ChatBotPage () {

    const [messages, setMessages] = useState<Message[]>([])
    const [value, setValue] = useState('')

    const bottomRef = useRef<HTMLDivElement | null>(null) 

    const fetchMessages = async () => {
        try {
            const res = await fetch(`${url}/messages`)
            const data = await res.json();
            setMessages(data)
        } catch ( err ) {
            console.error("Failed to fetch thought records: ", err)
        } 
    }

    const saveMessage = async (msg: Message) => {
        try {
          await fetch(`${url}/saveMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(msg),
          })
        } catch (err) {
          console.error("Failed to save message:", err)
        }
    }

    const getBotResponse = async (content: string): Promise<Message | null> => {
        try {
          const res = await fetch(`${url}/llmResponse?content=${encodeURIComponent(content)}`)
          const data = await res.json()
          return {
            role: "chatbot",
            content: data.chatbot_output,
            date: Date.now(),
          }
        } catch (err) {
          console.error("Failed to get chatbot response:", err)
          return null
        }
    }

    // load message history on mount
    // TODO: create custom hook
    useEffect(() => {
        fetchMessages();
    }, [])

    const sendMessage = async () => {

        const newMsg:Message = {role:'user', content: value, date: new Date()}
        setMessages(prev => [...prev, newMsg])
        await saveMessage(newMsg)
        setValue('')

        const botMsg = await getBotResponse(value)
        if (botMsg) {
            setMessages(prev => [...prev, botMsg])
            await saveMessage(botMsg)
        }
    }

    // slides down to current message
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (

        <div className="flex flex-col h-screen"> 
            <div className="flex flex-col w-[70rem] h-[48rem] bg-white shadow-sm rounded-xl m-auto">
            <div className="border-b-2 p-4 border-gray-100 text-lg font-semibold ">
                AI Chat
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto px-10 py-8 space-y-4 ">
                {messages.map((msg, i)=> 
                    <ChatBubble msg={msg} key={i}/>
                )}
                <div ref={bottomRef} />
            </div>

            <div className="border-t-2 p-4 border-gray-100 p-4">
                <div className="flex gap-2">
                    <Input
                        defaultValue="Type your message here ..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button 
                        className="text-sm text-center w-auto inline-block px-4 py-2 rounded-xl text-black bg-teal-200 border-teal-200 border transition hover:bg-teal-300 hover:border-teal-300 hover:text-black"
                        onClick={sendMessage}
                        >
                        <Send size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </div>
        </div>

    );
}

export default ChatBotPage