


module.exports = function(Sequelize, DataTypes) {
  
    var Report = Sequelize.define("Report", {
      stockSymbol: DataTypes.STRING,
      //StocksDate: DataTypes.DATEONLY,
      URLNameData: DataTypes.STRING,
      //MarketCapitalization: DataTypes.DECIMAL(18,2),
      //ebit: DataTypes.DECIMAL(18,2),
      //longTermDebt: DataTypes.DECIMAL(18,2),
      //cash: DataTypes.DECIMAL(18,2),
      URLStockPriceData: DataTypes.DECIMAL(18,2),
      URLMarketCapitalizationData: DataTypes.DECIMAL(18,2),
      debtRatio: DataTypes.DECIMAL(18,2)
    });
    return Report;
  };