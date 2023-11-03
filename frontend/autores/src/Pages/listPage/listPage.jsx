import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
import "./listPage.css"

export const ListPage = () => {
	const [listAuthor, setListAuthors] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		callListApi();
	}, []);

	const callListApi = async () => {
		let result = await axios.get("http://localhost:8100/api/author/get")
		setListAuthors(result.data)
	}

	const deleteAuthor = async (idAuth) => {
		let result = await axios.delete("http://localhost:8100/api/author/delete/" + idAuth)
		if (result.status === 200) {
			let listAuthorTemp = listAuthor.filter((auth) => auth._id !== idAuth);
			setListAuthors(listAuthorTemp);
			alert("Se ha eliminado correctamente");
		} else {
			alert("hubo un error");
		}
	}

	const goToEdit = (idAuth) => {
		navigate("/edit/" + idAuth)
	}

	return (
		<div>
			<h1>Favorite Authors</h1>
			<div  className="link">
				<Link to="/new">Add an Author</Link>
			</div>
			<p>We have quotes by: </p>
			<table>
				<thead>
					<tr>
						<th>Author</th>
						<th>Actions Available</th>
					</tr>
				</thead>
				{
					listAuthor.map((auth, index) => {
						return <tbody key={index}>
							<tr>
								<td>{auth.name}</td>
								<td className="botones">
									<button onClick={() => goToEdit(auth._id)}>Edit</button>
									<button onClick={() => deleteAuthor(auth._id)}>Delete</button>
								</td>
							</tr>
						</tbody>
					})
				}
			</table>
		</div>
	)
}
