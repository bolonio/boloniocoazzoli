import React, { FunctionComponent } from "react"
import { LayoutContent } from "@components/content"
import Box from "@components/core/Box"
import Text from "@components/core/Text"

export const Footer: FunctionComponent = () => {
  return (
    <Box background="#E3EBD9" padding="15px 0">
      <LayoutContent>
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          justifyContent="flex-end"
          alignItems={["center", "flex-end"]}
        >
          <Box marginRight="4">
            <Text color="white">Adrián Bolonio & Elena Coazzoli</Text>
          </Box>

          <Text color="white">
            20.08.2021 - Villa Ca' Vendri (Verona, Italia)
          </Text>
        </Box>
      </LayoutContent>
    </Box>
  )
}
