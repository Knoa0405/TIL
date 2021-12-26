{
    function checkNotNullNumberBad(arg: number | null): number {
        if(arg == null) {
            throw new Error('not valid number !');
        }
        return arg;
    }

    function checkNotNullStringBad(arg: string | null): string {
        if(arg == null) {
            throw new Error('not valid string !');
        }
        return arg;
    }

    function checkNotNullAnyBad(arg: any | null):any {
        if(arg == null) {
            throw new Error('Not valid number');
        }
        return arg;
    }

    function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
        if(arg == null) {
            throw new Error('not Valid');
        }
        return arg;
    }

    const number: number = checkNotNull(123);
    const bool: boolean = checkNotNull(false);

}