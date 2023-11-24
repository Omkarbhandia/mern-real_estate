import mongoose from "mongoose";

const listingSchema  = new mongoose.Schema({
    name: {
        type : String,
        required: [true, 'Name of site is required'],
    },
    description:{
        type : String,
        required: [true, 'Description of site is required'],
    },
    address:{
        type : String,
        required: [true, 'Address of site is required'],
    },
    regularPrice:{
        type : Number,
        required: [true, 'Price of site is required'],
    },
    discountedPrice:{
        type : Number,
        required: [true, 'Discounted Price of site is required'],
    },
    bathrooms:{
        type : Number,
        required: [true, 'Bathroom Count of site is required'],
    },
    bedrooms:{
        type : Number,
        required: [true, 'Bedroom Count of site is required'],
    },
    furnished:{
        type : Boolean,
        required: true,
    },
    parking:{
        type : Boolean,
        required: true,
    },
    type:{
        type : String,
        required: [true, 'Type of site is required'],
    },
    offer:{
        type : Boolean,
        required: true,
    },
    imageUrls:{
        type : Array,
        required: [true, 'Images of site are required'],
    },
    userRef:{
        type : String,
        required: true,
    },
}, {timestamps:true})

const Listing = mongoose.model('Listing', listingSchema)

export default Listing;