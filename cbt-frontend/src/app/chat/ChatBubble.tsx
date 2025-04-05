

function ChatBubble ({msg}) {

    const isUser = msg.role=="user" ? true : false

    return (
        <div
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
            <div
                className={`max-w-fit px-4 py-1 rounded-full shadow-sm ${
                isUser
                    ? "bg-[var(--color-sky-teal)] text-[var(--color-foreground)]"
                    : "bg-[var(--color-light-grey)] text-[var(--color-foreground)]"
                }`}
            >
                {msg.content}
            </div>
            </div>
    );

}

export default ChatBubble