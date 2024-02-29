const express = require('express');
const app = express();

const tennisService = require("./src/service/tennis.service")
const oddsService = require("./src/service/aceodds.service")

app.get("/odds", async function(req, res) {

  // settings.renderer.tennis.man = await tennisService.getTennis(1)
  // settings.renderer.tennis.woman = await tennisService.getTennis(0)
  // settings.renderer.odds = 
  	const data = await oddsService.getAceOdds()
	res.json(data);
});

app.get("/tennis/:gender", async function(req, res){
	const gender = req.params.gender
	const data = await tennisService.getTennis(gender)
	res.json(data)
})

app.listen(81, () => {
  console.log('Express started on port', 81);
})