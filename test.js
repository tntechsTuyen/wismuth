const a = require("./src/service/tennis.service")
// const {parse} = require('node-html-parser')
const cheerio = require('cheerio')

async function test(){
	const data = await a.getTennis()
	const $ = cheerio.load(data)
	for(const r in $("#reportable tbody tr")){
		const row = $(`#reportable tbody tr:eq(${r})`)
		console.log(row.text())
	}
}

test()