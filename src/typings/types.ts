// store custom TS types + interfaces here

export type SampleRootNumber = number;

export interface SampleRootObject {
    one: SampleRootNumber;
    two: number;
    three: {
        number: number;
        roman: string;
    };
}
