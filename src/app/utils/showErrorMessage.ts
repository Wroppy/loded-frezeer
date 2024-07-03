import { notifications } from "@mantine/notifications";

export const showErrorMessage = (title: string, message: string) => {
  notifications.show({
    color: "red",
    title,
    message,
  });
};
