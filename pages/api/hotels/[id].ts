import connectDB from "@/db";
import Hotel from "@/models/hotel.model";

export default async function handler(req:Request,res:Response){
    if(req.method==="GET"){
        connectDB();
        if(req?.query?.id){
            const hotel = await Hotel.findById(req?.query?.id);
            res.status(200).json({msg:"Good" , hotel});
        }
    }
}