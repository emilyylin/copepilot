export type EmotionData = {
    label: string;
    intensity: number;
};

export type EmotionProps = {
    emotion: EmotionData;
    setEmotion: (emotion: EmotionData) => void;
}

export type Message = {
    role: 'user' | 'assisstant';
    content: string;
    date: Date;
};