// - Crie uma função que concatene dois arrays usando o método push e spread operator.
function ar() {
    ar1 = [0,1,2]
    ar2 = [3,4,5]
    ar1.push(...ar2)
    console.log(ar1)
}
ar()