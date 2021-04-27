import { Avatar } from "@chakra-ui/avatar"
import { Button, IconButton } from "@chakra-ui/button"
import { DeleteIcon } from "@chakra-ui/icons"
import { HStack, Text, VStack } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/spinner"
import { format } from "date-fns"
import * as React from "react"
import { useShifts, useDeleteShift } from "../utils/shifts"
import { ErrorBox } from "./ErrorBox"

export function ShiftList() {
  const {
    data: { allShifts: shifts },
    isError,
    isLoading,
    error,
    isIdle,
  } = useShifts()

  const { mutate: remove } = useDeleteShift()

  if (isIdle) return null
  if (isLoading) return <Spinner />
  if (isError) {
    return <ErrorBox error={error} />
  }

  return (
    <React.Fragment>
      {shifts.map((s) => (
        <VStack m="8" key={s.id}>
          <HStack
            shadow="lg"
            width="100%"
            p="4"
            borderBottomColor="black"
            borderBottomWidth="2px"
            fontSize="1.25rem"
            justifyContent="space-between"
          >
            <Avatar
              background="black"
              name={s.worker.name}
              src="https://bit.ly/tioluwani-kolawole"
              color="#FAEBEFFF"
              fontWeight="800"
            />
            <Text color="#101820FF" flexBasis="100%">
              {s.worker.name}
            </Text>
            <Text
              flexBasis="100%"
              _before={{
                content: `"Start: "`,
                color: "brand.red",
                fontWeight: 800,
                fontSize: "1.5rem",
              }}
            >
              {format(s.start, "DD-MM-YY HH:mm")}
            </Text>
            <Text
              flexBasis="100%"
              _before={{
                content: `"End: "`,
                color: "brand.red",
                fontWeight: 700,
                fontSize: "1.5rem",
              }}
            >
              {format(s.end, "DD-MM-YY HH:mm")}
            </Text>
            <IconButton
              aria-label="Remove Shift"
              icon={<DeleteIcon />}
              onClick={() => remove(s.id)}
              borderColor="brand.blue.400"
              borderWidth="4px"
              borderStyle="solid"
              color="brand.red"
              background="brand.yellow"
              size="lg"
            />
          </HStack>
        </VStack>
      ))}
    </React.Fragment>
  )
}
