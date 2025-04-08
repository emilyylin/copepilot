import { Bot } from 'lucide-react'

function ChatBubble ({msg}) {

    const isUser = msg.role=="user" ? true : false

    return (
        <div
            className={`items-center gap-4 flex ${isUser ? "justify-end" : "justify-start"}`}
            >
                {!isUser && < Bot />}
            <div
                className={` text-sm max-w-lg px-4 py-2 rounded-xl shadow-md ${
                isUser
                    ? "bg-[var(--color-soft-gray)]"
                    : "bg-[var(--color-chat-blue)]"
                }`}
            >
                {msg.content}
            </div>
        </div>
    );

}

export default ChatBubble