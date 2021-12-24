{
    // 스택 만들기 ( OOP 개념 , 구조 활용 )
    // 자바스크립트에서 제공하는 자료구조 사용하지 않기!
    interface Stack {
        readonly size: number;
        head: number | null;
        push(item: Item): void;
        pop(): string;
    }
    interface Link {
        prevLink: number;
        nextLink: number;
    }
    interface Item extends Link {
        text: string;
    }

    class ItemClass implements Item {
        prevLink = 0;
        text = '';
        nextLink = 0;

        constructor(value : string) {
            this.prevLink = Date.now();
            this.text = value;
            this.nextLink = Date.now() + 10;
            
        }
    }
    // 연결 리스트로 구현
    // pop or push 함수 입력할 때마다 저장된 값이 FIFO 원칙으로 나와야 한다.
    class StackClass implements Stack {
        size: number = 10; // 스택의 사이즈를 정함.
        head: number | null = null; // 링크 리스트 head link 를 가리킴.

        temp: Item = {
            prevLink: 0,
            text: '',
            nextLink: 0
        };

        stackOverflowError() {
            if(this.size === 0) {
                throw new Error('Stack overflow');
            }
        }

        checkEmpty() {
            if(this.head === null) {
                throw new Error('Empty Stack');
            }
        }

        push(item : Item): void {
            this.stackOverflowError();
            this.size += 1;
            if(this.head === null) {
                this.head = item.prevLink;
                this.temp.text = item.text;
            }
            if(this.head !== null) {
                item.prevLink = this.temp.nextLink;
                this.temp.text = item.text;
            }
            this.temp.nextLink = item.nextLink;
        }

        pop(): string {
            this.checkEmpty();
            this.size -= 1;
            this.head = this.temp.nextLink;
            return this.temp.text;
        }
    }
    const item = new ItemClass('HELLO');
    const item2 = new ItemClass('HI');

    const stack = new StackClass();
    
    stack.push(item);
}