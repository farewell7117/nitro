export interface Post {
    id: number;
    time: number;
    location: string;
    author: string;
    text: string;
}

export interface Groups {
    groups: Post[][];
    keys: number[][];
}
