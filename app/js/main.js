let btn = document.querySelector('.btn')
let busketNum = document.querySelector('.basket__num')
let index = 0;


function busketNumPlus () {
   return index++
}

busketNum.addEventListener('click' = function () {
    busketNumPlus()
    let numValue = index.values

    busketNum.innerHTML = numValue
})
