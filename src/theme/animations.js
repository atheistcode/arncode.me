import { keyframes, css } from "styled-components"

// display animation
const displayKeyframe = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const displayCssAnim = css`
  animation-name: ${displayKeyframe};
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-fill-mode: backwards;
`

// width animation
const widthKeyframe = keyframes`
  from {
    width: 10%;
  }
  to {
    width: ${props => props.completed};
  }
`
const widthCssAnim = css`
  animation-name: ${widthKeyframe};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: backwards;
`

// export to theme
export const ANIMAION = {
  display: displayCssAnim,
  width: widthCssAnim,
}
