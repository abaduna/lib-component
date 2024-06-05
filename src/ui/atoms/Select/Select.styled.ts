import styled from 'styled-components'

export const Container = styled.select`
width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  color: #333;
  appearance: none; 
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2216%22%20height%3D%2216%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M7%2010l5%205%205-5z%22/%3E%3C/svg%3E');
  background-repeat: no-repeat; 
  background-position: right 10px top 50%; 
  background-size: 16px 16px; 

 
  &::-ms-expand {
    display: none; /* Quita el ícono de la flecha en IE */
  }

  
  &:focus {
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none; 
  }
`
