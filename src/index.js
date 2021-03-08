

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0) {
	return [];
  }
  let rows = matrix.length;
  let arrUnd = [];
  let arrIndex = 0;
  let j = 0;
  let result = [];
  for(let i=0;i<rows;i++){
    while(true){
    	if(matrix[i][j]==undefined){
      arrUnd[i] = j;
      arrIndex++;
      break;
      }
      j++;
    }
    j=0;
  }
  let resIndex = 0;
  for(let i=0;i<rows;i++){
  	if(i%2==0){
      for(let z=0;z<arrUnd[i];z++,resIndex++){
				result[resIndex] = matrix[i][z];
      }
    }else{
    	for(let z=arrUnd[i]-1;z>=0;z--,resIndex++){
				result[resIndex] = matrix[i][z];
      }
    }
  }
  return result;
}
