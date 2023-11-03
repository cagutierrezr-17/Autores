import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import "./createPage.css"

export const CreatePage = () => {
	const [name, setName] = useState("");
	const [validation, setValidation] = useState("");

	const navigate = useNavigate();
	const cancelForm = () => {
		navigate("/");
	}

	const submitForm = async () => {
		if (name !== "") {
			let dataAuthor = {
				"name": name,
			};
			try {
				let result = await axios.post("http://localhost:8100/api/author/create", dataAuthor)
				if (result.status === 200) {
					navigate("/");
				}
			} catch {
				setValidation("El Campo nombre debe contener minimo 3 caracteres");
			}
		} else {
			alert("Llene el Formulario");
		}
	}

	return (
		<div>
			<h1>Favorite Authors</h1>
			<Link to="/">Home</Link>
			<p>Add a new Author</p>
			<div className="form">
				<label>Name:</label>
				<br />
				<input
					type="text"
					placeholder=" Ingresar nombre de autor"
					value={name}
					onChange={(e) => setName(e.target.value)} />
				<br />
				<p className="error">{validation}</p>
				<div>
					<button onClick={cancelForm}>Cancel</button>
					<button onClick={submitForm}>Submit</button>
				</div>
			</div>
		</div>
	)
}
