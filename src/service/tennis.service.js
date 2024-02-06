const axios = require("axios")
const cheerio = require('cheerio')

const service = {
	getTennis: async function(){
		const url = "https://tennisabstract.com/reports/wta_elo_ratings.html?fbclid=IwAR3AOwGMfzhg8CY5Pu-irXM_UxVkLbjIM0QNFLhu45SF0YFdPkVnoRiV3zE"
		const req = await axios.get(url)
		const data = req.data
		const $ = cheerio.load(data)
		var tennis = []
		for(const r in $("#reportable tbody tr")){
			const row = $(`#reportable tbody tr:eq(${r})`)
			const cols = row.find("td")
			if(cols.length == 0) continue
			tennis.push({
				name: cols.eq(1).text(),
				age: cols.eq(2).text(),
				elo: cols.eq(3).text(),
				hardRaw: cols.eq(5).text(),
				clayRaw: cols.eq(6).text(),
				grassRaw: cols.eq(7).text(),
				hElo: cols.eq(8).text(),
				cElo: cols.eq(9).text(),
				gElo: cols.eq(10).text()
			})
		}
		return tennis
	}
}

module.exports = service