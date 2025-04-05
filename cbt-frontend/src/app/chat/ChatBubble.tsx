

function ChatBubble ({msg}) {

    return (
        <div className="flex">
            {msg.content}       
        </div>
    );

}

export default ChatBubble