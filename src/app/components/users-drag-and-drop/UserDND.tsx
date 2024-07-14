import { Table, TableTd, TableTh, TableThead, TableTr, rem } from "@mantine/core";
import { useListState, UseListStateHandlers } from "@mantine/hooks";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { IconGripVertical } from "@tabler/icons-react";
import styles from "./user-dnd.module.scss";
import ClientUser from "@/app/types/ClientUser";

const data = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

type Props = {
  state: ClientUser[],
  handlers: UseListStateHandlers<ClientUser>
}


export default function UserDND({state, handlers}: Props) {

  const items = state.map((item, index) => (
    <Draggable key={item.email} index={index} draggableId={item.email}>
      {(provided) => (
        <TableTr
          className={styles.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <TableTd>
            <div className={styles.dragHandle} {...provided.dragHandleProps}>
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
    <Table.ScrollContainer minWidth={420}>
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
              <Table.Tbody {...provided.droppableProps} ref={provided.innerRef}>
                {items}
                {provided.placeholder}
              </Table.Tbody>
            )}
          </Droppable>
        </Table>
      </DragDropContext>
    </Table.ScrollContainer>
  );
}
