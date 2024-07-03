import { notifications } from "@mantine/notifications";

export const showErrorMessage = (title: string, message: string) => {
  console.log("Hello");
  notifications.show({
    color: "red",
    title,
    message,
  });
};
