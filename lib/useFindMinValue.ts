export default function useFindMineValue(numberArray: number[]) {
   if (numberArray.length > 0) {
      const findLowestValue = Math.min(...numberArray);

      return findLowestValue;
   }
}
