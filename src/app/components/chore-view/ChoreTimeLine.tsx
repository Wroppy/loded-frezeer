import ClientChore from "@/app/types/ClientChore";
import formatDate from "@/app/utils/formatDate";
import { Timeline, TimelineItem, Text } from "@mantine/core";
import React from "react";

type Props = {
  chore: ClientChore;
};

const ChoreTimeLine = ({ chore }: Props) => {
  return (
    <Timeline active={chore.previousUser ? 1 : 0}>
      {/* Checks if the chore has a previous user */}
      {chore.previousUser && (
        <TimelineItem
          title={`Last Completed on ${formatDate(chore.lastCompleted)}`}
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
