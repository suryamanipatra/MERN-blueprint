import Image from '../models/image.model.js';

export const uploadImages = async (req, res) => {
    try {
        // Collect all image URLs and public_ids in an array
        const imageDetails = req.files.map((file) => ({
            url: file.path,
            public_id: file.filename,
        }));

        // Create a new image document with the URLs stored as an array
        const newImageDocument = new Image({
            urls: imageDetails,  // Store the image details as an array
        });
        await newImageDocument.save();

        res.status(200).json({ message: 'Images uploaded successfully', images: imageDetails });
    } catch (error) {
        res.status(500).json({ message: 'Upload failed', error });
    }
};

export const getImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch images', error });
    }
};
