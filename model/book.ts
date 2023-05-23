import { Period } from "./period.js";

export interface Book {
    name: string,
    author: string,
    date: [number, number, number];
    period: Period,
    content: string
}