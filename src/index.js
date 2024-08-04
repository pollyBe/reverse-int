module.exports = function reverse (n) {
    let result = '';

    if (n < 0) {
      n = Math.abs(n);
    }
  
  let stringN = String(n);
  
  for (let i = 0; i < stringN.length; i++) {
      
      
      if (stringN[i.length - 1] == 0) {
          stringN[i.length - 1] = '';
      }
  
      result = stringN[i] + result;    
  }
  
  return Number(result.trim());
}
