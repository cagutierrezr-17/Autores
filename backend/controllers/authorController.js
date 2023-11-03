import Author from "../models/authorModel.js"

const createAuthor = async (req, res) => {

	try {
		let authorData = req.body;
		let newAuthor = await Author.create(authorData);
		res.status(200).json(newAuthor);
	} catch (e) {
		console.log("error: " + e);
		res.status(400).json({
			"message": e.message
		});
	}
}

const getAuthors = async (req, res) => {
	let authorList = await Author.find();
	res.json(authorList);
}

const getOneAuthor = async (req, res) => {
	try {
		let id = req.params.idAuthor;
		let authorFound = await Author.findById(id);
		res.json(authorFound);
	} catch (e) {
		console.log(e);
	}
}

const deleteAuthor = async (req, res) => {
	let id = req.params.idAuthor;
	let authorDelete = await Author.findByIdAndDelete(id);
	console.log(authorDelete);
	res.json("Autor Borrado");
}

const updateAuthor = async (req, res) => {
	try {
		let id = req.params.idAuthor;
		let data = req.body;
		// el runValidators hace que las validaciones corran tambien en el metodo de actualización
		await Author.findByIdAndUpdate(id, data, { runValidators: true });
		res.status(200).json();
	} catch (e) {
		res.status(400).json({
			"message": e.message
		});
	}
}

export { createAuthor, getAuthors, getOneAuthor, deleteAuthor, updateAuthor };