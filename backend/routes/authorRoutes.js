import express from "express";
import * as authorCtrl from "../controllers/authorController.js"

const router = express.Router();

router.post("/api/author/create", authorCtrl.createAuthor);
router.get("/api/author/get", authorCtrl.getAuthors);
router.get("/api/author/getOne/:idAuthor", authorCtrl.getOneAuthor);
router.delete("/api/author/delete/:idAuthor", authorCtrl.deleteAuthor);
router.put("/api/author/update/:idAuthor", authorCtrl.updateAuthor);

export { router };