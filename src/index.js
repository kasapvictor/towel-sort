
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let count = 1;
    const out = [];

    for ( const i in matrix ) {
        if ( count % 2 === 0 ) {
            matrix[i].reverse();
        }

        out.push(matrix[i]);

        count++;
    }
    return out.flat(2);
}
