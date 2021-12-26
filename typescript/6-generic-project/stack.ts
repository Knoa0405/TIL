{
    // 스택 만들기 ( OOP 개념 , 구조 활용 )
    // 자바스크립트에서 제공하는 자료구조 사용하지 않기!
    interface Stack<T> {
        readonly size: number;
        push(value : T): void;
        pop(): T;
    }

    type StackNode<T> = {
        readonly value: T;
        readonly next?: StackNode<T>;
    }

    // 연결 리스트로 구현
    // pop or push 함수 입력할 때마다 저장된 값이 LIFO 원칙으로 나와야 한다.
    class StackImpl<T> implements Stack<T> {
        private _size: number = 0; // 스택의 사이즈를 정함.
        private head?: StackNode<T>; // 링크 리스트 head link 를 가리킴.

        get size(){
            return this._size;
        }

        stackOverflowError() {
            if(this.size >= 10) {
                throw new Error('Stack overflow');
            }
        }

        push(value : T): void {
            this.stackOverflowError();
            const node = { value, next: this.head };
            this.head = node;
            this._size ++;
        }

        pop(): T {
            if(this.head == null) {
                throw new Error('Empty Stack');
            }
            const node = this.head;
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