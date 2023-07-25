/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];

    function backtrack(start, path) {
        if (path.length === k) {
            result.push([...path]); // Add a copy of the current path to the result array
            return;
        }

        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path); // Call recursively with the next starting index
            path.pop(); // Backtrack by removing the last element from the path
        }
    }

    backtrack(1, []);
    return result;
};
