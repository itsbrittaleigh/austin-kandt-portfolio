const shuffleArray = (arr) => {
  const localArray = arr;
  let currentIndex = arr.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    const temporaryValue = localArray[currentIndex];
    localArray[currentIndex] = localArray[randomIndex];
    localArray[randomIndex] = temporaryValue;
  }

  return localArray;
};

export default shuffleArray;
