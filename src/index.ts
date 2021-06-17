import { bgRed, white, bold, bgBlack, bgGreen } from "colorette";

export class Test<I, E> {
    name: string;
    cases: Array<{ id: string; data: I; expected: E }>;

    private individualStatuses: Array<string> = [];
    private failedCases: number = 0;

    async onInit() {}

    async beforeEveryTest() {}

    async test({
        id,
        data,
        expected,
    }: {
        id: string;
        data: I;
        expected: E;
    }): Promise<{ result: E; condition: boolean }> {
        return;
    }

    async afterEveryTest() {}

    async run() {
        await this.onInit();

        for (const caseData of this.cases) {
            await this.beforeEveryTest();

            const testResult = await this.test(caseData);

            if (testResult.condition) {
                this.individualStatuses.push("PASS");
            } else {
                this.individualStatuses.push("FAIL");
                this.failedCases += 1;
                console.log(bgRed(white(`Test Case ${caseData.id} Failed`)), {
                    result: testResult.result,
                    ...caseData,
                });
            }

            await this.afterEveryTest();
        }

        await this.onEnd();

        if (this.failedCases > 0) {
            console.log("❌");
            console.log(bgRed(bold(white(`${this.name} Test Failed`))));
            console.log(
                bgBlack(
                    white(
                        `${this.cases.length - this.failedCases} Passed, ${
                            this.failedCases
                        } Failed`
                    )
                )
            );
        } else {
            console.log("✔");
            console.log(bgGreen(bold(white(`${this.name} Test Passed`))));
        }

        console.log(
            bgBlack(white(this.individualStatuses.toString() + "\n\n"))
        );
    }

    async onEnd() {}
}
