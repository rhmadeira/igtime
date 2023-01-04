import styled from "styled-components";
import { HistoryContainer, TableContainer } from "./styles";

const History = () => {
  return (
    <HistoryContainer>
      <h1>My History</h1>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Completada</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status status="concluido">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status status="concluido">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status status="concluido">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status status="concluido">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status status="concluido">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status status="concluido">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status status="concluido">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>25 minutos</td>
              <td>ha 2 meses</td>
              <td>
                <Status status="concluido">Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  );
};

export default History;

const STATUS_COLORS = {
  concluido: "green-500",
  pendente: "yellow-500",
} as const;

interface StatusProps {
  status: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.status]]};
  }
`;
