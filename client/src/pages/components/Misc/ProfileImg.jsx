import React from 'react';

const ProfileImg = () => {

    const uploadImage = async (files) => {
        const formData = new FormData()
        formData.append('file', files)
        formData.append('upload_preset', 'jag6ma0t')
        
        // const { data } = await axios.post('https://api.cloudinary.com/v1_1/dqdoxrm2x/image/upload', formData, {withCredentials: false})
        // const url = data?.secure_url
        // return url
    }

    return (
        <>
        <input type="file" lable="Image" name="myFile" id="file-upload" accept='.jpeg, .png, .jpg' onChange={(e) => {uploadImage(e.target.files)}}/>      
        </>
    );
}

export default ProfileImg;
