import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    urls: [{
        url: { type: String, required: true },
        public_id: { type: String, required: true },
    }],
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
