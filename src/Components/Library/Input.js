import styled from "styled-components";
import { variant, space, layout } from "styled-system";

const Input = styled.input(
  {
    outline: 0,
    border: "none",
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    margin:'1rem',
  },
  variant({
    variants: {
      primary: {
        backgroundColor: "white",
        padding: "0.5rem 0.5rem",
        border: 'solid grey',
        fontSize: "16px",
        "&::placeholder": {
          //fontWeight: 'bold',
          color: "#A4A4A4",
        },
      },
    },
  }),
  space,
  layout
);

export default Input;