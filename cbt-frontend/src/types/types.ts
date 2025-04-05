export type EmotionData = {
    label: string;
    intensity: number;
};

export type EmotionProps = {
    emotion: EmotionData;
    setEmotion: (emotion: EmotionData) => void;
}

export type Message = {
    role: 'user' | 'chatbot';
    content: string;
    date: Date;
};

export type ThoughtRecord = {
    timestamp: number;
    behavior: string;
    emotions: EmotionData[];
    situation: string;
    thought: string;
}