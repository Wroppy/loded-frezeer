import Chore from "@/app/types/ClientChore";

import React from 'react'
import ChoreBox from "../chore-box/ChoreBox";
import { Card } from "@mantine/core";


type Props = {
  chore: Chore;
}

const ChoreView = ({chore}: Props) => {
  return (
    <ChoreBox>
        Hello World
    </ChoreBox>
  )
}

export default ChoreView