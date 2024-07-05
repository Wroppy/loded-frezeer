import { ShoppingItem } from '@/app/types/ShoppingItem'
import React from 'react'
import styles from './shopping-list-item.module.scss'
import { Card, Checkbox, Table } from '@mantine/core'

type Props = {shoppingItem: ShoppingItem}

const ShoppingListItem = ({shoppingItem}: Props) => {
  return (
    <Card className={styles.ShoppingListItem}>
      <div className={styles.CheckBoxContainer}>
        <Checkbox type="checkbox" />
      </div>
      <div className={styles.ShoppingListItemName}>{shoppingItem.itemName}</div>
      <div>{shoppingItem.quantity}</div>
    </Card>
  )
}

export default ShoppingListItem;