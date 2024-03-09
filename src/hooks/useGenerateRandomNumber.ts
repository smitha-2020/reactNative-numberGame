import {useCallback, useState} from 'react';

export const useGenerateRandomNumber = (
  min: number,
  max: number,
  exclude: number,
) => {
  const [guessedNumber, setGuessedNumber] = useState<number>(0);
  const startGuess = useCallback(async () => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    setGuessedNumber(
      rndNum === exclude
        ? Math.floor(Math.random() * (max - min)) + min
        : rndNum,
    );
  }, [min, max, exclude]);

  return {guessedNumber, startGuess};
};
