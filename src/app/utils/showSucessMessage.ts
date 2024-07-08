import { notifications } from "@mantine/notifications";

export const showSucecssMessage = (title: string, message: string) => {
  notifications.show({
    color: "green",
    title,
    message,
  });
};