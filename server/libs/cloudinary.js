import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: "utsutroll",
    api_key: "213155212235887",
    api_secret: "9nSEWdxZs5F1GQgq7-HznE9AFzc"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}