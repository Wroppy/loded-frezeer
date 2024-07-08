import { notifications } from "@mantine/notifications";

export const showSuccessMessage = (message: string, title?: string) => {
  notifications.show({
    color: "green",
    title,
    message,
  });
};