const shuffler = (arr) => {
    const indexArr = [];
    const length = arr.length;
    while (indexArr.length < length) {
      const randomIndex = Math.floor(Math.random() * length);
      
      if (!indexArr.includes(randomIndex)) {
          indexArr.push(randomIndex);
      }
    }
    
    return indexArr;
  }
  
  module.exports = {
      shuffler
  }