{
    // 스택 만들기 ( OOP 개념 , 구조 활용 )
    // 자바스크립트에서 제공하는 자료구조 사용하지 않기!
    interface Stack {
        readonly size: number;
        push(value : string): void;
        pop(): string;
    }

    type StackNode = {
        readonly value: string;
        readonly next?: StackNode;
    }

    // 연결 리스트로 구현
    // pop or push 함수 입력할 때마다 저장된 값이 LIFO 원칙으로 나와야 한다.
    class StackImpl implements Stack {
        private _size: number = 0; // 스택의 사이즈를 정함.
        private head?: StackNode; // 링크 리스트 head link 를 가리킴.

        get size(){
            return this._size;
        }

        stackOverflowError() {
            if(this.size >= 10) {
                throw new Error('Stack overflow');
            }
        }

        push(value : string): void {
            this.stackOverflowError();
            const node: StackNode = { value, next: this.head };
            this.head = node;
            this._size ++;
        }

        pop(): string {
            if(this.head == null) {
                throw new Error('Empty Stack');
            }
            const node: StackNode = this.head;
            this.head = node.next;
            this._size --;
            return node.value;
        }
    }

    const stack = new StackImpl();

    stack.push('ELLIE !');
    stack.push('BOB 2');
    stack.push('Steve 3');
    
    while(stack.size !== 0) {
        console.log(stack.pop());
    }

    stack.pop();
}