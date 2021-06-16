export declare class Test<I, E> {
    name: string;
    cases: Array<{
        id: string;
        data: I;
        expected: E;
    }>;
    private individualStatuses;
    private failedCases;
    onInit(): Promise<void>;
    beforeEveryTest(): Promise<void>;
    test({ id, data, expected, }: {
        id: string;
        data: I;
        expected: E;
    }): Promise<{
        result: E;
        condition: boolean;
    }>;
    afterEveryTest(): Promise<void>;
    run(): Promise<void>;
    onEnd(): Promise<void>;
}
