export interface Post {
    id: number;
    time: number;
    location: string;
    author: string;
    text: string;
}

export interface Groups {
    items: Post[][];
    keys: string[];
}
