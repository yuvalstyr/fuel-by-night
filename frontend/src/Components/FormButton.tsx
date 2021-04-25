import * as React from "react";
import { Button } from "@chakra-ui/react";

export function FormButton() {
  return (
    <Button
      variant="solid"
      width="10rem"
      background="brand.blue.400"
      color="brand.red"
      fontWeight="700"
      type="submit"
    >
      Add
    </Button>
  );
}