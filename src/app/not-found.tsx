import { Divider, Flex } from "@mantine/core";
import Link from "next/link";

export default async function NotFound() {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      style={{ width: "100%", height: "100%", padding: "32px" }}
    >
      <Flex gap="lg">
        <Flex direction={"column"} align={"center"}>
          <h1>404</h1>
        </Flex>
        <Divider orientation={"vertical"} />
        <Flex direction={"column"}>
          <div>Unfortunately the page you requested was not found</div>
          <div>
            Go back to <Link href="/">home</Link>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}
