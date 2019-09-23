module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 == 0){
    let mask;
    let in_length = str.length;
    for (let k = 0; k  < in_length; k++){
      for (let i = 0; i < bracketsConfig.length; i++){
      mask = bracketsConfig[i][0] + bracketsConfig[i][1];

      while (str.indexOf(mask,0) != -1 ){
        str = str.slice(0,str.indexOf(mask,0)) + str.slice(str.indexOf(mask,0)+2);
      }    
    }
    
    if (str.length == 0) return true;
    } 
  }
  return false;
}
