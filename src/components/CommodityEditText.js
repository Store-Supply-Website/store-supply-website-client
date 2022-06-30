import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import CommodityImageCard from "./CmomodityImageCard"

const CommodityEditText = React.forwardRef((props, ref) => {
  const title = props.title
  const setTitle = props.setTitle
  const content = props.content
  const setContent = props.setContent
  const setSelectedImage = props.setSelectedImage
  const selectedImage = props.selectedImage
  // const [value, setValue] = React.useState("")
  // const handleChange = (event) => {
  //   setTitle(event.target.value)
  // }
  const handleTitleChange = (event) => {
    // console.log(event.target)
    setTitle(event.target.value)
  }
  const handleContentChange = (event) => {
    // console.log(event.target)
    setContent(event.target.value)
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
          id="Commodity_EditText_Title"
          label="Title"
          multiline
          maxRows={4}
          value={title}
          onChange={handleTitleChange}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="Commodity_EditText_Content"
          label="Description"
          multiline
          maxRows={4}
          value={content}
          onChange={handleContentChange}
          variant="filled"
        />
      </div>
      <CommodityImageCard setSelectedImage={setSelectedImage} selectedImage={selectedImage}></CommodityImageCard>
    </Box>
  )
})
export default CommodityEditText
// export default function CommodityEditText () {
//   const [value, setValue] = React.useState("")

//   const handleChange = (event) => {
//     setValue(event.target.value)
//   }

//   return (
//     <Box
//       component="form"
//       sx={{
//         "& .MuiTextField-root": { m: 1, width: "60ch" }
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           id="Commodity_EditText_Title"
//           label="Title"
//           multiline
//           maxRows={4}
//           value={value}
//           onChange={handleChange}
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           id="Commodity_EditText_Content"
//           label="Description"
//           multiline
//           rows={4}
//           defaultValue=""
//           variant="filled"
//         />
//       </div>
//       <CommodityImageCard></CommodityImageCard>
//       {/* <Stack spacing={2} direction="row" sx={{ ml: 9, mt: 2 }}>
//         <Button variant="outlined">Submit</Button>
//       </Stack> */}
//     </Box>
//   )
// }
