import { Play } from "phosphor-react";
import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  StartCountDownButton,
} from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" type="text" />
          <label htmlFor="duration">Durante</label>
          <input id="duration" type="number" />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountDownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
};

export default Home;
