type Video = {
    title : string;
    author : string;
    description : string;
}

type Optional<T> = {
    [P in keyof T]?: T[P] // for...in
}

type VideoOptional = Optional<Video>;

const videoOp: VideoOptional = {
    // animal : 'cat', =>  error not type
    title : 'test',
    author : 'noah'
}

type Animal = {
    name : string;
    age : number;
}

const animal : Optional<Animal> = {
    age : 12,
}


type ReadOnly<T> = {
    readonly [P in keyof T]?: T[P]
}

const video: ReadOnly<Video> = {
    title : 'hello',
}

console.log(video.title = 'test'); // readonly

type Nullable<T> =  { [P in keyof T]?: T[P] | null };

const obj2 : Nullable<Video> = {
    title : null,
    author : null,
}

type Proxy<T> = {
    get() : T;
    set(value: T) : void;
}

type Proxify<T> = {
    [P in keyof T]?: Proxy<T[P]>
}

// type VideoOptional = {
//     title?: string;
//     author?: string;
//     description?: string;
// }

// type VideoReadOnly = {
//     readonly title : string;
//     readonly author : string;
//     readonly description : string;
// }