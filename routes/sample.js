
// const allData = await Fetch('https://eodhistoricaldata.com/api/exchange-symbol-list/US?api_token='+ process.env.EOD_KEY)

// async function getAllStockData() {

//     for (var i = 0; i < stocks.length; i++) {
//         const allData = await Fetch('https://eodhistoricaldata.com/api/exchange-symbol-list/US?api_token='+ process.env.EOD_KEY)
        
//         const allData2 = await allData.json();

//         // var symbol = stocks[i]
//         // var name = URLNameData
//         // var price = URLStockPriceData2
//         // var marketcap = URLMarketCapitalizationData
//         // var debt = debtRatio
//         // var  growth = qtrGrowthYOYData
//         var values = [ allData2]
//         pool.connect((err, db, done) => {
//             if (err) {
//                 return response.status(400).send(err)
//             } else {
//                 db.query('insert into stock_list ( symbol ,name, price, marketcap, debt, growth ) values($1,$2,$3,$4,$5,$6)', [...values], (err, table) => {
//                     if (err) {
//                         return response.status(400).send(err)
//                     }
//                     else {
//                         //console.log(table.rows)
//                         console.log('data inserted')
//                         db.end()
//                         response.status(201).send({ message: 'Data inserted!' })
//                     }
//                 })
//             }
//         })
       
//     }
// }