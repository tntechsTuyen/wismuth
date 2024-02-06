const a = require("./src/service/aceodds.service")
async function test(){
	const data = await a.getAceOdds()
	console.log(data)
}

test()