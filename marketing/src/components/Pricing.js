import {
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import * as React from "react";

function Pricing() {
  return (
    <List spacing={3}>
      <ListItem>
        <ListIcon as={TriangleDownIcon} color='green.500' />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        <ListIcon as={TriangleDownIcon} color='green.500' />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        <ListIcon as={TriangleDownIcon} color='green.500' />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
      <ListItem>
        <ListIcon as={TriangleDownIcon} color='green.500' />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  )
}

export { Pricing }