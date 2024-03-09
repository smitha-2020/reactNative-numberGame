import {useCallback, useState} from 'react';

export const useGenerateRandomNumber = (
  min: number,
  max: number,
  exclude: number,
) => {
  const [guessedNumber, setGuessedNumber] = useState<number>(exclude);
  const startGuess = useCallback(async () => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    console.log(min, max, exclude);

    const numb =
      rndNum === exclude
        ? Math.floor(Math.random() * (max - min)) + min
        : rndNum;

    setGuessedNumber(numb);
  }, [min, max, exclude]);
  return {guessedNumber, startGuess};
};
