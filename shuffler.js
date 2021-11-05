const shuffler = () => {
    const indexArr = [];
   
    while (indexArr.length < 4) {
      const randomIndex = Math.floor(Math.random() * 4);
      
      if (!indexArr.includes(randomIndex)) {
          indexArr.push(randomIndex);
      }
    }
    
    return indexArr;
  }
  
  module.exports = {
      shuffler
  }