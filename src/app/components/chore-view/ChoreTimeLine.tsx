import Chore from "@/app/types/ClientChore";
import { Timeline, TimelineItem, Text } from "@mantine/core";
import React from "react";

type Props = {
  chore: Chore;
};

const ChoreTimeLine = ({ chore }: Props) => {
  return (
    <Timeline active={chore.previousUser ? 1 : 0}>
      {/* Checks if the chore has a previous user */}
      {chore.previousUser && (
        <TimelineItem
          title={`Last Completed on ${chore.lastCompleted.toDateString()}`}
        >
          <Text c="dimmed">By {chore.previousUser}</Text>
        </TimelineItem>
      )}
      <TimelineItem title="Current Chore Doer">
        <Text c="dimmed">{chore.expectedUser} </Text>
      </TimelineItem>
      <TimelineItem title="Next Chore Doer">
        <Text c="dimmed"> {chore.nextExpectedUser} </Text>
      </TimelineItem>
      {/* Checks if the chore has a current user */}
    </Timeline>
  );
};

export default ChoreTimeLine;
