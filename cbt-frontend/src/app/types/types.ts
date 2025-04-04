export type EmotionData = {
    label: string;
    intensity: number;
};

export type EmotionProps = {
    emotion: EmotionData
    setEmotion: (emotion: EmotionData) => void;
}