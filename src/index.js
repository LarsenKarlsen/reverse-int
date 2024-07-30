module.exports = function reverse (n) {
    return n > 0 ? Number(n.toString().split("").reverse().join("")) : Number((-1*n).toString().split("").reverse().join(""))
}
