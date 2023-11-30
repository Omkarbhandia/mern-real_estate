import Listing from "../models/listingModel.js"
import { errorHandler } from "../utils/error.js";

export const createListing = async(req, res, next) =>{
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing)
    } catch (error) {
        next(error)
    }
}

export const deleteListing = async(req,res,next)=> {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(errorHandler(401, 'Lisiting Does not Exist'));
    }

    if(req.user.id !== listing.userRef){
        return next(errorHandler(401, 'You can only delete your listings.'))
    }

    try {
        await Listing.findByIdAndDelete(req.params.id)
        res.status(200).json('Listing deleted Successfully!')
    } catch (error) {
        next(error)
    }
}


export const updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(errorHandler(401, 'Listing Does not Exist'));
    }
    if(req.user.id !== listing.userRef){
        return next(errorHandler(401, 'You can only edit your listings.'))
    }

    try {
        const updatedlisting = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        res.status(200).json(updatedlisting)
    } catch (error) {
        next(error)
    }
}

export const getListing = async(req, res, next) =>{
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return next(errorHandler(401, 'Lisiting Does not Exist'));
        }  
        res.status(200).json(listing); 
    } catch (error) {
        next(error)
    }
}