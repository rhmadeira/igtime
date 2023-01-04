import { Play } from "phosphor-react";
import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  StartCountDownButton,
  TaskInput,
  MinutesAmountInput,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const schemaCycleForm = zod.object({
  task: zod.string().min(1, "De um nome para sua tarefa"),
  duration: zod
    .number()
    .min(5)
    .max(60, "O intervalo precisa ser de no máximo 60 minutos")
    .nonnegative()
    .int(),
});

type NewCycleFormData = zod.infer<typeof schemaCycleForm>;

const Home = () => {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(schemaCycleForm),
      defaultValues: {
        task: "",
        duration: 0,
      },
    });

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);
    reset();
  }

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
            {...register("duration", { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountDownButton disabled={!task} type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
};

export default Home;
