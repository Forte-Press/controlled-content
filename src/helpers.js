export function shuffle(array) {
    if ( array.length === 2) {
        return array.reverse();
    }
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
}
