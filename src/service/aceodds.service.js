const axios = require("axios")
const cheerio = require('cheerio')

const service = {
	getAceOdds: async function(){
		const url = "https://www.aceodds.com/bet-calculator/odds-converter.html"
		const req = await axios.get(url)
		const data = req.data
		const $ = cheerio.load(data)
		var odds = []
		for(var i = 1; i < $("#odds-conversion-table tbody tr").length; i++){
			const row = $(`#odds-conversion-table tbody tr:eq(${i})`)
			const cols = row.find("td")
			if(cols.length == 0) continue
			odds.push({
				fraction: cols.eq(0).text(),
				decimal: cols.eq(1).text(),
				american: cols.eq(2).text(),
				implied: cols.eq(3).text()
			})
		}
		return odds
	}
}

module.exports = service