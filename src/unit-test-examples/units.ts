// Super Simple Unit Functions

export const add = (a: number, b: number) => {
    return a + b;
}

export const divide = (a: number, b: number) => {
    if (b === 0) { throw new Error('div by 0') }

    return a / b;
}


export const concat = (a: string, b: string) => {
    if (!a || !b) throw new Error('One of the strings is empty');
    return a + b;
}