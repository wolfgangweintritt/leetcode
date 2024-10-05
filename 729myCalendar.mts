class MyCalendar {
    schedule: number[][];

    constructor() {
        this.schedule = [];
    }

    book(start: number, end: number): boolean {
        return this.#recursiveBook(start, end, 0, this.schedule.length - 1);
    }

    #recursiveBook(start: number, end: number, startIdx: number, endIdx: number): boolean {
        console.log(start, end, startIdx, endIdx);
        if (startIdx > endIdx) {
            console.log("splice1");
            this.schedule.splice(startIdx, 0, [start, end]);
            return true;
        }

        const middleIdx: number = Math.floor((startIdx + endIdx) / 2);
        if (this.schedule[middleIdx] === undefined) {
            console.log("splice2");
            this.schedule.splice(middleIdx, 0, [start, end]);
            return true;
        }

        const startSmallerEnd: boolean = start < this.schedule[middleIdx][1];
        const endGreaterStart: boolean = end > this.schedule[middleIdx][0];
        if (startSmallerEnd && endGreaterStart) {
            return false;
        }

        return startSmallerEnd 
            ? this.#recursiveBook(start, end, startIdx, middleIdx - 1)
            : this.#recursiveBook(start, end, middleIdx + 1, endIdx);
    }
}

const calendar: MyCalendar = new MyCalendar()
const calls: number[][] = [[47,50],[33,41],[39,45],[33,42],[25,32],[26,35],[19,25],[3,8],[8,13],[18,27]];
calls.forEach(
    (arr: number[]) => calendar.book(arr[0], arr[1])
)
console.log(calendar.schedule);
/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */