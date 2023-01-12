import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  restaurantPicture: {
    type: String,
 },

  restaurantName: {
    type: String,
  },

  restaurantLocation:{
    type: String,
    
  },
  restaurantRating:{
    type: String,
    enum:[ "Min","Max"]
  },
  
  restaurantPriceRange: {
    type: String,
    
  },
  distance: {
    type: Boolean,
    default: true
  },
 
  }, {
    timestamps: true
  });
  
  restaurantSchema.pre (/^find/, function (next){
    this.populate({
      path:"user",
      select: "firstname lastname username email phone role",
  
  });
    next ();
  });
export default mongoose.model('restaurant', restaurantSchema);
