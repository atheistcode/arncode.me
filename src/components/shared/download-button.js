import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

import Button from "./button"
import PrimaryButton from "./primary-button"
import SecondaryButton from "./secondary-button"

const Container = styled.div`
  position: relative;
`
const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 1.18rem;
  margin-left: -2.8rem;
  font-size: ${props => props.theme.fontSize.sm};
  cursor: pointer;
  transition: ${props => props.theme.transition.quick};
`
const StyledDownloadButton = styled(Button)`
  padding-right: 3.5rem;
`

const DownloadButton = props => {
  return (
    <Container>
      <StyledDownloadButton
        {...props}
        as={props.secondary ? SecondaryButton : PrimaryButton}
      />
      <Icon icon={faDownload} />
    </Container>
  )
}

export default DownloadButton
