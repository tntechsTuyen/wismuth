const axios = require("axios")
const cheerio = require('cheerio')

const service = {
	getTennis: async function(gender){
		var url = ""
		if(gender == 1){
			//Men
			url = "https://tennisabstract.com/reports/atp_elo_ratings.html"
		}else{
			//Woman
			url = "https://tennisabstract.com/reports/wta_elo_ratings.html"
		}
		
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
				elo: cols.eq(3).text() * 1,
				hardRaw: cols.eq(5).text(),
				clayRaw: cols.eq(6).text(),
				grassRaw: cols.eq(7).text(),
				hElo: cols.eq(9).text(),
				cElo: cols.eq(10).text(),
				gElo: cols.eq(11).text(),
				peakElo: cols.eq(15).text() * 1
			})
		}
		return tennis
	},
	getRecent: async function(name){
		const url = `https://www.minorleaguesplits.com/tennisabstract/cgi-bin/frags/${name}.js`
		const req = await axios.get(url)

		var data = req.data.substring(req.data.indexOf("player_frag = ") + 15, req.data.indexOf("var frag_menu"))
		data = data.replace("`;", "")

		const $ = cheerio.load(data)
		var recents = [], tourLevels = [], challengerLevels = []
		var date1 = null
		for(const r in $("#recent-results tbody tr")){
			const row = $(`#recent-results tbody tr:eq(${r})`)
			const cols = row.find("td")

			if(cols.eq(8).text().length == 0) continue
			if(date1 == null) date1 = cols.eq(0).text()
			else if(date1 != cols.eq(0).text()) break

			var source = cols.eq(7).text().replace(/-/g, " ");
			var sources = source.split(" ");
			var totalSource = 0;
			for(let i = 0; i < sources.length; i++){
				let item = (sources[i].indexOf("(") != -1) ? sources[i].substring(0, sources[i].indexOf("(")) : sources[i]
				totalSource += item * 1
			}
			if(cols.eq(0).text().trim().length == 0) break

			var strTime = cols.eq(15).text()
			strTime = strTime.split(":")

			recents.push({
				date: cols.eq(0).text(),
				tour: cols.eq(1).text(),
				surface: cols.eq(2).text(),
				name: cols.eq(6).text(),
				source: cols.eq(7).text(),
				totalSource: totalSource,
				dr: cols.eq(8).text()*1,
				a: cols.eq(9).text().replace("%", "")*1,
				df: cols.eq(10).text().replace("%", "")*1,
				stln: cols.eq(11).text().replace("%", "")*1,
				st: cols.eq(12).text().replace("%", "")*1,
				nd: cols.eq(13).text().replace("%", "")*1,
				bpsvd: cols.eq(14).text(),
				time: strTime[0]*1+(strTime[1]*1/60),
			})
		}


		for(let r = 0; r < $("#career-splits tbody tr").length; r++){
			const row = $(`#career-splits tbody tr:eq(${r})`)
			const cols = row.find("td")
			tourLevels.push({
				split: cols.eq(0).text(),
				m: cols.eq(1).text()*1,
				w: cols.eq(2).text()*1,
				l: cols.eq(3).text()*1,
				win: cols.eq(4).text().replace("%", "")*1,
				tb: cols.eq(10).text().replace("%", "")*1,
				hld: cols.eq(12).text().replace("%", "")*1,
				brk: cols.eq(13).text().replace("%", "")*1,
			})
		}
		for(let r = 0; r < $("#last52-splits-chall tbody tr").length; r++){
			const row = $(`#last52-splits-chall tbody tr:eq(${r})`)
			const cols = row.find("td")
			challengerLevels.push({
				split: cols.eq(0).text(),
				m: cols.eq(1).text()*1,
				w: cols.eq(2).text()*1,
				l: cols.eq(3).text()*1,
				win: cols.eq(4).text().replace("%", "")*1,
				tb: cols.eq(10).text().replace("%", "")*1,
				hld: cols.eq(12).text().replace("%", "")*1,
				brk: cols.eq(13).text().replace("%", "")*1,
			})
		}
		return {'recents': recents, 'tourLevels': tourLevels, 'challengerLevels': challengerLevels}
	}
}

module.exports = service