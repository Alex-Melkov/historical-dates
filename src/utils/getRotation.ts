export const getRotation = (number: number): number[] => {
  let array = [30];
  let degOne = 360 / number;
  let prevCount = 30;

  for (let i = 1; i < number; i++) {
    array.push(prevCount + degOne);
    prevCount = prevCount + degOne;
  }
  return array;
};
