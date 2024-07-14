import {
  Table,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  rem,
} from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { IconGripVertical } from "@tabler/icons-react";
import classes from "./DndTable.module.css";
import User from "@/app/types/ClientUser";

type Props = {
  users: User[];
};

export function DndTable({users}: Props) {
  const [state, handlers] = useListState(users);

  const items = state.map((item, index) => (
    <Draggable key={item.email} index={index} draggableId={item.email}>
      {(provided) => (
        <TableTr
          className={classes.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <TableTd>
            <div className={classes.dragHandle} {...provided.dragHandleProps}>
              <IconGripVertical
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </div>
          </TableTd>
          <TableTd>{item.name}</TableTd>
        </TableTr>
      )}
    </Draggable>
  ));

  return (
    <TableScrollContainer minWidth={420}>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          handlers.reorder({ from: source.index, to: destination?.index || 0 })
        }
      >
        <Table>
          <TableThead>
            <TableTr>
              <TableTh style={{ width: rem(40) }} />
              <TableTh>Name</TableTh>
            </TableTr>
          </TableThead>
          <Droppable droppableId="dnd-list" direction="vertical">
            {(provided) => (
              <TableTbody {...provided.droppableProps} ref={provided.innerRef}>
                {items}
                {provided.placeholder}
              </TableTbody>
            )}
          </Droppable>
        </Table>
      </DragDropContext>
    </TableScrollContainer>
  );
}
