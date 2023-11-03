import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../createPage/createPage.css"

export const UpdatePage = () => {
	const [name, setName] = useState("");
	const [validation, setValidation] = useState("");

	const navigate = useNavigate();

	const params = useParams();
	let authorid = params.id;

	useEffect(() => {
		getAuthorData();
	}, []);

	const getAuthorData = async () => {
		let result = await axios.get("http://localhost:8100/api/author/getOne/" + authorid);
		setName(result.data.name)
	}

	const updateAuthor = async () => {
		var authorData = {
			"name": name,
		}
		try {
			var result = await axios.put("http://localhost:8100/api/author/update/" + authorid, authorData);
			if (result.status === 200) {
				navigate("/");
			}
		} catch (e) {
			setValidation("El Campo nombre debe contener minimo 3 caracteres");
		}
	}

	const goToHome = () => {
		navigate("/");
	}

	return (
		<div>
			<h1>Favorite Authors</h1>
			<Link to="/">Home</Link>
			<p>Edit this author</p>
			<div className="form">
				<label>Name:</label>
				<br />
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)} />
				<br />
				<p className="error">{validation}</p>
				<div>
					<button onClick={goToHome}>Cancel</button>
					<button onClick={updateAuthor}>Submit</button>
				</div>
			</div>
		</div>
	)
}