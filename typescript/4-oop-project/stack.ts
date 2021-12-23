{
    // 스택 만들기 ( OOP 개념 , 구조 활용 )
    // 자바스크립트에서 제공하는 자료구조 사용하지 않기!
    interface Stack {
        readonly size: number;
        
        push(value: string): void;
        pop(): string;
    }

    interface Item  {
        generateLink() : number;
        prevLink : number;
        nextLink : number;
    }

    // string pop push
    // 넣은 순서대로 인덱스가 있어야 하지 않나? 없다면 쌓는 구조 어떻게?
    // 변수로만 구현?
    // 연결 리스트로 구현 =>

    // pop or push 함수 입력할 때마다 저장된 값이 FIFO 원칙으로 나와야 한다.

    class ItemClass implements Item {
        prevLink = 0;
        nextLink = 0;

        constructor() {
            this.prevLink = this.generateLink();
            this.nextLink = this.generateLink();
        }

        generateLink() : number {
            return Date.now()
        }
    }
    class StackClass implements Stack {
        // 스택 그릇 만들기 ? 자료 구조 없이
        // 초기화
        size = 0;
        head = null; // null 을 가리킴.

        constructor({ item }) {
            this.head
        }

        push() {
            return 'string';
        }

        pop() {
            return 'string';
        }
    }

    const item = new ItemClass();

    const stack = new StackClass({ item });
}