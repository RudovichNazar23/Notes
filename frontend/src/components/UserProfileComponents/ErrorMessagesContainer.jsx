import { useEffect, useState } from "react";

export default function ErrorMessagesContainer({ messages }){
    return (
        <div className="container">
            {
                messages.map(
                    (message, messageId) => <div key={messageId} className="text-danger">{message}</div>
                )
            }
        </div>
    );
};