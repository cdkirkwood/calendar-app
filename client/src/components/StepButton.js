import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const StepButton = (props) => (
  <Button icon color={props.color} onClick={() => props.step(props.direction, props.curMonth, props.allMonths)}>
    <Icon name={props.icon} />
  </Button>
)

export default StepButton

