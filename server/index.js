const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const { query } = require("express");
const morgan = require("morgan");

//Middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//ROUTES//

//Create artno

app.post("/post", async (req, res) => {
    try {
        const {Id, Stars, Vote} = req.body;
        const response = await pool.query(
            "INSERT INTO betyg (Id, Stars, Vote) VALUES($1,$2,$3) RETURNING *",
            [Id, Stars, Vote]
        );

        res.json(response.rows[0]);
        console.log(req.body)
    } catch (err) {
        console.error(err.message)
    }
})

//Get all artno

app.get("/pricetags", async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM pricetags");

        res.status(200).json({
            status: "succes",
            results: results.rows.length,
            article: results.rows,
        })
    } catch (err) {
        console.error(err.message)
    }
})

//Get specific artno

app.get("/pricetags/:articlenumber", async (req, res) => {
    try {
        const { articlenumber } = req.params;
        const art = await pool.query(
            "SELECT * FROM pricetags WHERE articlenumber = $1",
            [articlenumber]
        );
        res.json(art.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//Update artno

app.put("/pricetags/:articlenumber", async (req, res) => {
    try {
        const { articlenumber } = req.params;
        const { tm_title, ch_title, title2, desc1, desc2, desc3, desc4, price_ord, price_discount, header } = req.body;
        const updateArt = await pool.query(
            `UPDATE pricetags 
            SET tm_title = $2, ch_title = $3, title2 = $4, desc1 = $5, desc2 = $6, desc3 = $7, desc4 = $8, price_ord = $9, price_discount = $10, header = $11
            WHERE articlenumber = $1`,
            [articlenumber, tm_title, ch_title, title2, desc1, desc2, desc3, desc4, price_ord, price_discount,header]
        )
        res.json("Mallen blev uppdaterad!")
    } catch (err) {
        console.error(err.message);
    }
})

//Delete artno

app.delete("/pricetags/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteArt = await pool.query("DELETE FROM pricetags WHERE id = $1",
            [id]);
        res.status(204).json({
        })
    } catch (err) {
        console.error(err.message);
    }
})

const port =  8080
app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
});