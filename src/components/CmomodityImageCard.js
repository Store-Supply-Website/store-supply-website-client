import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { useState, useEffect } from "react"
const CommodityImageCard = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage))
    }
  }, [selectedImage])

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />

      <label htmlFor="select-image">
        <Box textAlign="center">
          <Button variant="text" color="primary" component="span">
            Upload Image
          </Button>
        </Box>
      </label>

      {imageUrl && selectedImage && (
        <Box textAlign="center">
          {/* <div>Image Preview:</div> */}
          <img src={imageUrl} alt={selectedImage.name} height="250px" width="250px" />
        </Box>
      )}
    </>
  )
}

export default CommodityImageCard
