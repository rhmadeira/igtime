import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.25rem;
    color: ${({ theme }) => theme["gray-100"]};
  }
`;
export const TableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    border-collapse: collapse; //para não ter espaços entre as linhas
    min-width: 600px;

    th {
      background-color: ${({ theme }) => theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme["gray-100"]};
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.5rem;

      &:first-child {
        border-top-left-radius: 0.25rem;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 0.25rem;
      }
    }
    td {
      background-color: ${({ theme }) => theme["gray-700"]};
      border-top: 4px solid ${({ theme }) => theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5rem;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }
      &:last-child {
        padding-left: 1.5rem;
      }
    }
  }
`;
