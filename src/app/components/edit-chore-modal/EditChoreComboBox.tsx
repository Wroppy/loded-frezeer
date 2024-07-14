import ChoreCycles from "@/app/Enums/ChoreCycles";
import {
  Combobox,
  ComboboxTarget,
  InputBase,
  ComboboxChevron,
  InputPlaceholder,
  ComboboxDropdown,
  ComboboxOptions,
  ComboboxOption,
  useCombobox,
} from "@mantine/core";
import { User } from "next-auth";
import React from "react";

type Props = {
  values: string[];
  labels: string[];

  placeholderText: string;
  value: any;
  setValue: (val: any) => void;
};

const EditChoreComboBox = ({
  placeholderText,
  value,
  setValue,
  values,
  labels,
}: Props) => {
  const combobox = useCombobox();

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val as ChoreCycles);
        combobox.closeDropdown();
      }}
    >
      <ComboboxTarget>
        <InputBase
          style={{ width: "100%" }}
          component="button"
          type="button"
          pointer
          rightSection={<ComboboxChevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {" "}
          {labels[values.findIndex((x) => x === value)] || <InputPlaceholder>{placeholderText}</InputPlaceholder>}
        </InputBase>
      </ComboboxTarget>
      <ComboboxDropdown>
        <ComboboxOptions>
          {values.map((value, key) => {
            return (
              <ComboboxOption key={key} value={value}>
                {labels[key]}
              </ComboboxOption>
            );
          })}
        </ComboboxOptions>
      </ComboboxDropdown>
    </Combobox>
  );
};

export default EditChoreComboBox;
