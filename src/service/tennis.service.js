const axios = require("axios")
const {parse} = require('node-html-parser')

const service = {
	getTennis: async function(){
		const url = "https://tennisabstract.com/reports/wta_elo_ratings.html?fbclid=IwAR3AOwGMfzhg8CY5Pu-irXM_UxVkLbjIM0QNFLhu45SF0YFdPkVnoRiV3zE"
		const req = await axios.get(url)
		const data = req.data
		// const tblTennis = document.getElementById("reportable")
		// const rows = tblTennis.querySelectorAll("tbody tr")

		// var tennis = []

		// rows.forEach((el) => {
		// 	const col = rows.querySelectorAll("td")
		// 	tennis.push({
		// 		name: col[1].innerText,
		// 		age: col[2].innerText
		// 	})
		// })

		return data
	}
}

module.exports = service