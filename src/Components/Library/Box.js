import styled from "styled-components";
import {
  color,
  typography,
  layout,
  space,
  border,
  shadow,
  display,
  flexbox,
  grid,
  background,
  position,
  compose,
} from "styled-system";

const Box = styled("div")(
  compose(
    color,
    typography,
    layout,
    space,
    border,
    shadow,
    display,
    flexbox,
    grid,
    background,
    position
  )
);

export default Box;
