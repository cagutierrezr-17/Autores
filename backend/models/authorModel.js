import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
	{
		name: { type: String, minLength: [3, "El autor debe contener minimo 3 caracteres"], required: true },
	}
);

const Author = mongoose.model("authors", AuthorSchema);

export default Author;