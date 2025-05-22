import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
    { 
        title: String, 
        description: String, 
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,

},
{
    timestamps: true,
    // versionKey: false
}
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);