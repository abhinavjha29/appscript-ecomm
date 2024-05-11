import styled from "styled-components";

const Cart = () => {
  return (
    <EmptyDiv>
      <h3>No Cart in Item </h3>
    </EmptyDiv>
  );
};

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

export default Cart;
