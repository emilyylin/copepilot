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

export type InsightSectionProps = {
    title: string;
    children: React.ReactNode;
}

export type TimeStats = {
    days: Record<"Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday", number>;
    time: number[]; // length 24 (one for each hour)
}