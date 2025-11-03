import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Admin:Deyruiz1997@cluster0.34rpw1w.mongodb.net/SorteosOnline?retryWrites=true&w=majority&appName=Cluster0");
    console.log("✅ Conectado correctamente a MongoDB Atlas");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
