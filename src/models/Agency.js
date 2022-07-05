import mongoose from "mongoose";

const AgencySchema = mongoose.Schema({
    Agency : { type : String },
	Description : { type : String },
	EDIAgencyID : { type : String },
	TransactionSetAgency : { type : String },
	SegmentAgency : { type : String },
	ElementAgency : { type : String },
	CodeAgency : { type : String }
},{
    collection: 'Agency'
})

const Agency = mongoose.model('Agency', AgencySchema);

export {Agency};