function womenMix(p) {
	return bestOf3(p);
}

systems_["tennis-women"] = {

	date: "2022-01-10",
	minLength: 2,
	formula: "logistic",

	getRating: function(entry) { return entry[1]; },

	getInfo: function(entry) { return ""; },

	eloDiff: function(rating1, rating2) {
		var diff = rating1 - rating2;
		var p = eloFn(diff);
		var p2 = inverseFn(womenMix, 0, 1, p);
		var diff2 = invEloFn(p2);
		return diff2;
	},

// cat wta-2022-01-10.txt | awk -F '\t' '{ printf "\t\t[\"%s\", %s],\n", $2, $4}'
	list: [
		["Ashleigh Barty", 2134.4],
		["Anett Kontaveit", 2073.1],
		["Garbine Muguruza", 2043.0],
		["Simona Halep", 2026.8],
		["Victoria Azarenka", 2019.0],
		["Paula Badosa", 2018.1],
		["Iga Swiatek", 2017.5],
		["Aryna Sabalenka", 2013.5],
		["Naomi Osaka", 2013.0],
		["Ons Jabeur", 2011.9],
		["Karolina Pliskova", 2009.8],
		["Maria Sakkari", 2004.4],
		["Danielle Rose Collins", 1991.9],
		["Petra Kvitova", 1977.6],
		["Serena Williams", 1964.7],
		["Jennifer Brady", 1964.6],
		["Barbora Krejcikova", 1963.1],
		["Elina Svitolina", 1961.5],
		["Belinda Bencic", 1956.9],
		["Angelique Kerber", 1956.0],
		["Elena Rybakina", 1953.6],
		["Marketa Vondrousova", 1952.7],
		["Jessica Pegula", 1944.9],
		["Cori Gauff", 1939.7],
		["Jelena Ostapenko", 1939.3],
		["Clara Tauson", 1931.2],
		["Karolina Muchova", 1919.9],
		["Leylah Annie Fernandez", 1917.6],
		["Elise Mertens", 1914.1],
		["Amanda Anisimova", 1912.2],
		["Darya Kasatkina", 1903.9],
		["Anastasia Pavlyuchenkova", 1900.4],
		["Camila Giorgi", 1898.2],
		["Kiki Bertens", 1894.9],
		["Emma Raducanu", 1890.4],
		["Bianca Andreescu", 1876.0],
		["Ludmilla Samsonova", 1874.5],
		["Veronika Kudermetova", 1871.7],
		["Yulia Putintseva", 1857.3],
		["Madison Keys", 1856.0],
		["Johanna Konta", 1848.8],
		["Ann Li", 1839.3],
		["Sara Sorribes Tormo", 1835.1],
		["Shelby Rogers", 1833.9],
		["Ekaterina Alexandrova", 1831.3],
		["Jil Belen Teichmann", 1826.2],
		["Katerina Siniakova", 1823.0],
		["Ajla Tomljanovic", 1818.9],
		["Vera Zvonareva", 1816.9],
		["Donna Vekic", 1815.4],
		["Irina Camelia Begu", 1812.3],
		["Alison Van Uytvanck", 1809.3],
		["Sloane Stephens", 1808.4],
		["Aliaksandra Sasnovich", 1806.3],
		["Anastasija Sevastova", 1805.8],
		["Svetlana Kuznetsova", 1805.4],
		["Sofia Kenin", 1803.4],
		["Sorana Cirstea", 1801.8],
		["Marta Kostyuk", 1801.1],
		["Alison Riske", 1799.2],
		["Viktorija Golubic", 1798.5],
		["Alize Cornet", 1797.6],
		["Tereza Martincova", 1796.3],
		["Laura Siegemund", 1793.0],
		["Anna Kalinskaya", 1790.9],
		["Kaia Kanepi", 1789.3],
		["Tsvetana Pironkova", 1788.9],
		["Ana Konjuh", 1788.1],
		["Maria Camila Osorio Serrano", 1785.0],
		["Jasmine Paolini", 1783.6],
		["Magda Linette", 1783.1],
		["Venus Williams", 1774.3],
		["Qiang Wang", 1770.3],
		["Tamara Zidansek", 1765.0],
		["Lesia Tsurenko", 1764.3],
		["Nadia Podoroska", 1760.0],
		["Rebecca Peterson", 1758.0],
		["Su Wei Hsieh", 1757.9],
		["Andrea Petkovic", 1756.1],
		["Qinwen Zheng", 1755.4],
		["Petra Martic", 1755.4],
		["Elena Gabriela Ruse", 1754.8],
		["Caroline Garcia", 1748.9],
		["Anhelina Kalinina", 1745.7],
		["Saisai Zheng", 1740.2],
		["Dayana Yastremska", 1738.7],
		["Anastasia Potapova", 1736.2],
		["Zarina Diyas", 1735.5],
		["Arantxa Rus", 1718.0],
		["Marie Bouzkova", 1717.7],
		["Kirsten Flipkens", 1716.9],
		["Shuai Zhang", 1714.4],
		["Kristina Mladenovic", 1713.4],
		["Jaqueline Adina Cristian", 1712.8],
		["Anna Karolina Schmiedlova", 1712.8],
		["Fiona Ferro", 1711.2],
		["Katie Boulter", 1709.5],
		["Anna Bondar", 1706.3],
		["Madison Brengle", 1703.8],
		["Magdalena Frech", 1699.6],
		["Margarita Gasparyan", 1698.7],
		["Claire Liu", 1697.8],
		["Eugenie Bouchard", 1696.4],
		["Kateryna Kozlova", 1693.6],
		["Mihaela Buzarnescu", 1691.9],
		["Nuria Parrizas Diaz", 1690.8],
		["Xin Yu Wang", 1690.7],
		["Misaki Doi", 1690.4],
		["Lauren Davis", 1686.2],
		["Lin Zhu", 1685.6],
		["Ana Bogdan", 1684.8],
		["Clara Burel", 1683.9],
		["Maryna Zanevska", 1679.2],
		["Monica Niculescu", 1678.5],
		["Mayar Sherif", 1674.3],
		["Bernarda Pera", 1674.2],
		["Kaja Juvan", 1672.5],
		["Kristyna Pliskova", 1667.3],
		["Patricia Maria Tig", 1666.9],
		["Varvara Lepchenko", 1665.3],
		["Nina Stojanovic", 1665.0],
		["Varvara Gracheva", 1664.4],
		["Coco Vandeweghe", 1663.7],
		["Harriet Dart", 1662.8],
		["Bethanie Mattek Sands", 1659.5],
		["Harmony Tan", 1658.8],
		["Martina Trevisan", 1657.9],
		["Jule Niemeier", 1656.9],
		["Vitalia Diatchenko", 1656.1],
		["Storm Sanders", 1652.9],
		["Aliona Bolsova", 1651.9],
		["Polona Hercog", 1650.4],
		["Greetje Minnen", 1648.4],
		["Aleksandra Krunic", 1648.3],
		["Beatriz Haddad Maia", 1647.6],
		["Heather Watson", 1646.3],
		["Danka Kovinic", 1643.3],
		["Samantha Stosur", 1642.8],
		["Elisabetta Cocciaretto", 1642.6],
		["Kamilla Rakhimova", 1639.5],
		["Olga Danilovic", 1636.8],
		["Sara Errani", 1632.1],
		["Alexandra Dulgheru", 1631.5],
		["Oceane Dodin", 1630.4],
		["Viktoria Kuzmova", 1623.2],
		["Diane Parry", 1615.0],
		["Kristina Kucova", 1614.3],
		["Astra Sharma", 1614.1],
		["Yaroslava Shvedova", 1613.8],
		["Dalma Galfi", 1611.9],
		["Christina Mchale", 1605.1],
		["Anastasia Kulikova", 1602.4],
		["Anastasia Gasanova", 1597.8],
		["Priscilla Hon", 1597.7],
		["Tereza Smitkova", 1596.6],
		["Ysaline Bonaventure", 1592.3],
		["Anna Blinkova", 1590.2],
		["Rebecca Marino", 1587.7],
		["Timea Babos", 1585.4],
		["Xiyu Wang", 1584.5],
		["Danielle Lao", 1583.9],
		["Caty Mcnally", 1583.9],
		["Lesley Kerkhove", 1582.4],
		["Nao Hibino", 1577.3],
		["Yue Yuan", 1564.4],
		["Victoria Jimenez Kasintseva", 1562.4],
		["Sachia Vickery", 1560.7],
		["Yafan Wang", 1558.9],
		["Olga Govortsova", 1558.2],
		["Francesca Jones", 1556.1],
		["Tatjana Maria", 1552.1],
		["Linda Noskova", 1550.9],
		["En Shuo Liang", 1550.9],
		["Robin Anderson", 1550.7],
		["Panna Udvardy", 1549.1],
		["Stefanie Voegele", 1548.2],
		["Rebecca Sramkova", 1544.8],
		["Anna Lena Friedsam", 1539.9],
		["Daria Snigur", 1539.6],
		["Mandy Minella", 1538.8],
		["Paula Ormaechea", 1536.9],
		["Kateryna Bondarenko", 1536.3],
		["Daniela Vismane", 1535.5],
		["Alexa Glatch", 1535.1],
		["Elina Avanesyan", 1535.0],
		["Lucia Bronzetti", 1534.1],
		["Katarina Zavatska", 1534.1],
		["Irina Maria Bara", 1529.9],
		["Cristina Bucsa", 1528.6],
		["Renata Zarazua", 1528.4],
		["Hailey Baptiste", 1524.5],
		["Mai Hontama", 1524.5],
		["Lara Arruabarrena", 1522.6],
		["Usue Maitane Arconada", 1520.8],
		["Natalia Vikhlyantseva", 1520.0],
		["Mona Barthel", 1519.0],
		["Barbara Haas", 1513.2],
		["Despina Papamichail", 1513.2],
		["Kurumi Nara", 1511.0],
		["Sara Bejlek", 1507.5],
		["Georgina Garcia Perez", 1498.4],
		["Ellen Perez", 1496.6],
		["Rebeka Masarova", 1495.2],
		["Oksana Selekhmeteva", 1491.3],
		["Kristie Ahn", 1489.2],
		["Ekaterine Gorgodze", 1488.0],
		["Valentini Grammatikopoulou", 1487.4],
		["Jana Fett", 1486.4],
		["Chloe Paquet", 1484.1],
		["Lizette Cabrera", 1483.5],
		["Veronica Cepede Royg", 1482.7],
		["Alexandra Cadantu", 1482.6],
		["Mariam Bolkvadze", 1482.4],
		["Emina Bektas", 1478.1],
		["Yuliya Hatouka", 1477.0],
		["Viktoriya Tomova", 1475.8],
		["Isabella Shinikova", 1475.8],
		["Arianne Hartono", 1475.6],
		["Katarzyna Kawa", 1475.0],
		["Tamara Korpatsch", 1474.6],
		["Maddison Inglis", 1472.6],
		["Mayo Hibi", 1469.3],
		["Katie Volynets", 1469.3],
		["Kathinka Von Deichmann", 1468.9],
		["Victoria Duval", 1466.1],
		["Marcela Zacarias", 1463.5],
		["Cagla Buyukakcay", 1459.8],
		["Arina Rodionova", 1459.3],
		["Louisa Chirico", 1458.9],
		["Giulia Gatto Monticone", 1458.4],
		["Asia Muhammed", 1458.0],
		["Federica Di Sarra", 1453.6],
		["Linda Fruhvirtova", 1452.6],
		["Ane Mintegi Del Olmo", 1450.8],
		["Jamie Loeb", 1449.6],
		["Julia Grabher", 1447.2],
		["Katrina Scott", 1445.8],
		["Urszula Radwanska", 1444.1],
		["Na Lae Han", 1442.9],
		["Grace Min", 1440.5],
		["Caroline Dolehide", 1439.2],
		["Andrea Lazaro Garcia", 1436.8],
		["Emma Navarro", 1435.9],
		["Hanna Chang", 1435.6],
		["Ylena In Albon", 1435.5],
		["Dalayna Hewitt", 1435.4],
		["Anastasia Zakharova", 1434.3],
		["Dalila Jakupovic", 1432.6],
		["Tereza Mrdeza", 1431.7],
		["Cristiana Ferrando", 1429.2],
		["Amandine Hesse", 1428.4],
		["Elvina Kalieva", 1427.7],
		["Jessika Ponchet", 1427.5],
		["Olivia Gadecki", 1423.4],
		["Jessica Pieri", 1421.1],
		["Francesca Di Lorenzo", 1415.7],
		["Allie Kiick", 1415.3],
		["Elsa Jacquemot", 1414.7],
		["Raluca Georgiana Serban", 1413.9],
		["Seone Mendez", 1413.7],
		["Jia Jing Lu", 1412.5],
		["Simona Waltert", 1410.6],
		["Sophie Chang", 1410.3],
		["Lucrezia Stefanini", 1409.8],
		["Stephanie Wagner", 1408.6],
		["Destanee Aiava", 1405.2],
		["Katherine Sebov", 1404.0],
		["Conny Perrin", 1398.4],
		["Tessah Andrianjafitrimo", 1398.4],
		["Catherine Harrison", 1397.2],
		["Mallaurie Noel", 1395.9],
		["Richel Hogenkamp", 1393.4],
		["Marina Melnikova", 1393.4],
		["Valeria Savinykh", 1392.8],
		["Natalija Kostic", 1384.7],
		["Aldila Sutjiadi", 1382.0],
		["Daniela Seguel", 1380.5],
		["Yuriko Miyazaki", 1380.1],
		["Eva Guerrero Alvarez", 1379.2],
		["Jodie Anna Burrage", 1376.1],
		["Alycia Parks", 1375.0],
		["Ellie Douglas", 1373.6],
		["Carol Zhao", 1369.3],
		["Gabriela Ce", 1368.7],
		["Reka Luca Jani", 1368.4],
		["Martina Di Giuseppe", 1365.6],
		["Gabriela Talaba", 1364.4],
		["Susan Bandecchi", 1359.7],
		["Ulrikke Eikeri", 1358.9],
		["Anna Zaja", 1357.4],
		["Carolina Meligeni Rodrigues Alves", 1357.2],
		["Ankita Raina", 1355.7],
		["Laura Ioana Andrei", 1352.5],
		["Xiaodi You", 1348.9],
		["Iryna Shymanovich", 1345.3],
		["Sarah Beth Askew", 1344.8],
		["Samantha Murray", 1344.4],
		["Elitsa Kostova", 1342.8],
		["Bianca Turati", 1338.7],
		["Yuki Naito", 1337.5],
		["Yana Morderger", 1337.0],
		["Mirjam Bjorklund", 1332.5],
		["Anna Danilina", 1325.6],
		["Maria Lourdes Carle", 1320.9],
		["Marie Benoit", 1319.6],
		["Quinn Gleason", 1314.8],
		["Laura Pigossi", 1304.0],
		["Katharina Gerlach", 1298.1],
		["Irene Burillo Escorihuela", 1294.5],
		["Whitney Osuigwe", 1292.4],
		["Indy De Vroome", 1292.2],
		["Marina Bassols Ribera", 1286.0],
		["Ashlyn Krueger", 1281.2],
		["Naiktha Bains", 1270.7],
		["Tara Moore", 1270.2],
		["Leonie Kung", 1261.7],
		["Irina Fetecau", 1251.0],
		["Peangtarn Plipuech", 1250.4],
		["Barbara Gatica", 1242.3],
		["Maria Gutierrez Carrasco", 1236.5],
		["Leolia Jeanjean", 1227.9],
		["Tena Lukas", 1219.8],
		["Ana Sofia Sanchez", 1209.3]
	]
};