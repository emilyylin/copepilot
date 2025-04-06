

function ChatBubble ({msg}) {

    const isUser = msg.role=="user" ? true : false

    return (
        <div
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
            <div
                className={`max-w-fit px-4 py-1 rounded-full shadow-sm ${
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