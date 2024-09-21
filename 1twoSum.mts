
function twoSum(nums: number[], target: number): number[] {
    const m: Map<number, number[]> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const mapValue = m.get(nums[i]);
        if (mapValue !== undefined) {
            mapValue.push(i);
        } else {
            m.set(nums[i], [i]);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const restIndices = m.get(target - nums[i]);
        if (restIndices === undefined) {
            continue;
        }

        for (let r = 0; r < restIndices.length; r++) {
            if (restIndices[r] === i) {
                continue;
            }
            return [i, restIndices[r]];
        }
    }
};