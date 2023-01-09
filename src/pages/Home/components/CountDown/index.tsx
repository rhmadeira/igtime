import { differenceInSeconds } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { CyclesContext } from "../../../../contexts/CycleContext";
import { CountdownContainer, Separator } from "./styles";

export function CountDown() {
  const {
    activeCycle,
    markCycleAsFinishedDate,
    amountSecondsPassed,
    setAmountSecond,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsDifference >= totalSeconds) {
          markCycleAsFinishedDate();
        }else{
          setAmountSecond(secondsDifference);
        }

      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeCycle]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `Ignite Timer ${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  );
}
