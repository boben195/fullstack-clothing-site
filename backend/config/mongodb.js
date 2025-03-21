import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("Connection is here!!!")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/fullstack-project`)

}

export default connectDB