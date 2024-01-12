import { useState } from "react"
import useShowToast from "./useShowToast"

const usePreviewImage = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const showToast = useShowToast()
    const maxImageSize = 2 * 1024 * 1024 //2MB
    const HandleImagePreview = (e) => {
        const file = e.target.files[0]
        if (file && file.type.startsWith("image/")) {
            if(file.size > maxImageSize){
                showToast("Error", "Please select an image less than " + maxImageSize, "error")
                setSelectedFile(null);
                return
            }
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedFile(reader.result);
            };

            reader.readAsDataURL(file);

        }else{
            showToast("Error", "Please Select an Image file", "error");
            setSelectedFile(null);
        }
    }
  return {selectedFile, HandleImagePreview, setSelectedFile}
}

export default usePreviewImage