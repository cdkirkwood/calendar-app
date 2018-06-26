import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const AddOrEditButton = (props) => (
  <Button icon color={props.color}>
    <Icon name= {props.icon}/>
  </Button>
)

export default AddOrEditButton

//'plus circle'