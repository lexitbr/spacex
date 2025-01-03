import { Box, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { IconType } from "react-icons";
import { LuRocket } from "react-icons/lu";

interface RocketDetailProps {
  title: string;
  value: string | number;
  Icon: IconType;
  color?: string;
}

export default function RocketDetail({
  title,
  value,
  Icon,
  color,
}: RocketDetailProps) {
  return (
    <Card>
      <Flex gap="3" align="center">
        <Flex
          width="50px"
          height="50px"
          style={{
            backgroundColor: "black",
            borderRadius: 100,
            overflow: "hidden",
          }}
          justify={"center"}
          align={"center"}
        >
          <Icon
            color={color ?? "white"}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </Flex>
        <Box>
          <Text as="div" size="2" weight="bold" color="violet">
            {title ?? "N/A"}
          </Text>
          <Text
            as="div"
            size="2"
            color="purple"
            // style={{ textTransform: "capitalize" }}
          >
            {value ?? "N/A"}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
