{
    // either a or b
    interface Either<L, R> {
        left: () => L;
        right: () => R;
    }

    class SimpleEither<L,R> implements Either<L,R> {
        constructor(private leftValue: L, private rightValue: R) {}

        left(): L {
            return this.leftValue;
        }

        right(): R {
            return this.rightValue;
        }
    }

    const either = new SimpleEither("string",5);

    const best = new SimpleEither({ name : 'element'}, 'hello');

    console.log(best.right());
    console.log(best.left());
}