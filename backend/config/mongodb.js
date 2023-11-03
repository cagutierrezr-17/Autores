import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/authors")
	.then(() => {
		console.log("conectado correctamente a la BD");
	})
	.catch((e) => {
		console.log(e);
	});
