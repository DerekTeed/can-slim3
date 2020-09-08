


module.exports = function(sequelize, DataTypes) {
  
  var Report = sequelize.define("Report", {
    symbol: DataTypes.STRING,
    //StocksDate: DataTypes.DATEONLY,
    companyName: DataTypes.STRING,
    //MarketCapitalization: DataTypes.DECIMAL(18,2),
    //ebit: DataTypes.DECIMAL(18,2),
    //longTermDebt: DataTypes.DECIMAL(18,2),
    //cash: DataTypes.DECIMAL(18,2),
    stockPrice: DataTypes.DECIMAL(18,2),
    finalRatioEvEbit: DataTypes.DECIMAL(18,2)
  });
  return Report;
};