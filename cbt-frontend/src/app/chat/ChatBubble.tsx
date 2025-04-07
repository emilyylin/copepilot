import { Bot } from 'lucide-react'

function ChatBubble ({msg}) {

    const isUser = msg.role=="user" ? true : false

    return (
        <div
            className={`items-center gap-4 flex ${isUser ? "justify-end" : "justify-start"}`}
            >
                {!isUser && < Bot />}
            <div
                className={` text-sm max-w-lg px-4 py-2 rounded-xl shadow-sm ${
                isUser
                    ? "bg-teal-200 text-gray-800"
                    : "bg-gray-200 text-gray-800"
                }`}
            >
                {msg.content}
            </div>
        </div>
    );

}

export default ChatBubble