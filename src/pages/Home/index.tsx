import { HandPalm, Play } from "phosphor-react";
import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  StartCountDownButton,
  TaskInput,
  MinutesAmountInput,
  StopCountDownButton,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

const schemaCycleForm = zod.object({
  task: zod.string().min(1, "De um nome para sua tarefa"),
  minutesAmount: zod
    .number()
    .min(5)
    .max(60, "O intervalo precisa ser de no máximo 60 minutos")
    .nonnegative()
    .int(),
});

type NewCycleFormData = zod.infer<typeof schemaCycleForm>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDateTime?: Date;
}

const Home = () => {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [totalSecondsPassed, setTotalSecondsPassed] = useState(0);
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(schemaCycleForm),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        setTotalSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDateTime)
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeCycle]);

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDateTime: new Date(),
    };
    setCycles((oldCycles) => [...oldCycles, newCycle]);
    setActiveCycleId(id);
    setTotalSecondsPassed(0);
    reset();
  }

  console.log(activeCycle);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - totalSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds} - Pomodoro`;
  }, [minutes, seconds]);

  const task = watch("task");

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            placeholder="De um nome para sua tarefa"
            id="task"
            type="text"
            list="task-suggeston"
            disabled={!!activeCycle}
            {...register("task")}
          />
          <datalist id="task-suggeston">
            <option value="project 1" />
            <option value="project 2" />
            <option value="project 3" />
            <option value="project 4" />
          </datalist>
          <label htmlFor="duration">Durante</label>
          <MinutesAmountInput
            id="duration"
            type="number"
            placeholder="00"
            step={5} // pula de 5 em 5 minutos
            min={5} // mínimo de 5 minutos
            max={60} // máximo de 60 minutos
            disabled={!!activeCycle}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>
        {activeCycle ? (
          <StopCountDownButton type="button">
            <HandPalm size={24} />
            Stop
          </StopCountDownButton>
        ) : (
          <StartCountDownButton disabled={!task} type="submit">
            <Play size={24} />
            Start
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
};

export default Home;
