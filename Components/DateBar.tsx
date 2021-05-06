import { Button } from "@chakra-ui/button"
import { Box, Heading, HStack } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/media-query"
import format from "date-fns/format"
import * as React from "react"
import ReactDatePicker from "react-datepicker"
import { FormButton } from "./FormButton"
import { ISelectedDate } from "./ShiftForm"

export function DateBar({ date, setDate }: ISelectedDate) {
  // todo change format of heading disply
  const dateType = useBreakpointValue({ base: "dd/MM/yy", md: "PPPPpp" })
  return (
    <Box>
      <Box
        boxShadow="dark-lg"
        pt="0.5"
        pb="0.5"
        pr="0"
        pl="0"
        rounded="md"
        bg="brand.yellow"
        width="full"
      >
        <HStack
          p="2"
          rounded="md"
          mb="4"
          bg="brand.yellow"
          borderWidth={{ base: "8px", md: "16px" }}
          borderColor="brand.blue.400"
          color="brand.red"
          justifyContent="space-around"
        >
          <Heading fontSize={{ base: "md", md: "2xl" }}>
            {format(date, dateType ?? "dd/MM/yy")}
          </Heading>
          <ReactDatePicker
            onChange={(date: Date) => setDate(date)}
            popperModifiers={{ offset: { enabled: true, offset: "-75px" } }}
            customInput={
              <Button
                mt={{ base: "4px", md: 0 }}
                variant="solid"
                width={{ base: "100px", md: "150px" }}
                fontSize={{ base: "sm", md: "xl" }}
                background="brand.blue.400"
                color="brand.red"
                fontWeight="700"
                borderColor="blackAlpha.100"
                _placeholder={{ color: "black" }}
              >
                Pick A Day
              </Button>
            }
          />
        </HStack>
      </Box>
    </Box>
  )
}