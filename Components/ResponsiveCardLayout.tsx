import { Center, HStack, StackProps, VStack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import * as React from "react";

export function ResponsiveCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const size = useBreakpointValue({ base: "sm", xl: "lg" });

  const Component =
    size === "sm" ? (
      <VStack spacing={{ base: "6", md: "20", xl: "-20" }}>{children}</VStack>
    ) : (
      <HStack>{children}</HStack>
    );
  return <Center>{Component}</Center>;
}
