export const getRelevantArrayBack = (count: number, activeDate: number): number[] => {
    let maxIndex: number = count - 1;
    let array: number[] = [];
    let value: number[] = [];

    for (let i = activeDate; i <= maxIndex; i++) {
        array.push(i)
    }
    for (let i = 0; i < activeDate; i++) {
        array.push(i)
    }
    if (count === 2) {
        value = [];
    }
    if (count === 3) {
        let arr = array.slice(1, 2);
        value = arr;
    }
    if (count === 4) {
        let arr = array.slice(1, 2);
        value = arr;
    }
    if (count === 5) {
        let arr = array.slice(1, 3);
        value = arr;
    }
    if (count === 6) {
        let arr = array.slice(1, 4);
        value = arr;
    }
    return value;
};