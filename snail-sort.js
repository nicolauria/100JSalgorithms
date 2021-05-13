let snail = function(array) {
    let result = [];
    let start = 0;
    let end = array.length - 1;
    
    let outerIdx = array[0].length - 1;
    let innerIdx = 0;
    
    while (start < end) {
      result.push(...array[start].slice(innerIdx, outerIdx+1));

      if (start < end - 1) {
        for (let i = 1; i < end; i++) {
            result.push(array[i][outerIdx]);
          }
      }

      result.push(...(array[end].slice(innerIdx, outerIdx+1).reverse()));
      
      for (let i = end - 1; i > start; i--) {
        result.push(array[i][innerIdx]);
      }
      
      start += 1;
      end -= 1;
      outerIdx -= 1;
      innerIdx += 1;
    }
    
    if (array.length % 2 !== 0) {
        for (let i = innerIdx; i <= outerIdx; i++) {
            result.push(array[start][i]);
        }
    }
    
    return result;
}

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
console.log(snail(array));

array = [[1,2,3,1],
         [4,5,6,4],
         [7,8,9,7],
         [7,8,9,7]]
console.log(snail(array));