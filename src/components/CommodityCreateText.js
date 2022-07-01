import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import CommodityImageCard from "./CmomodityImageCard"
export default function CommodityCreateText () {
  const [value, setValue] = React.useState("")

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "60ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="Commodity_CreateText_Title"
          label="Title"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="Commodity_CreateText_Content"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
        />
      </div>
      <CommodityImageCard></CommodityImageCard>
      {/* <Stack spacing={2} direction="row" sx={{ ml: 9, mt: 2 }}>
        <Button variant="outlined">Submit</Button>
      </Stack> */}
    </Box>
  )
}
