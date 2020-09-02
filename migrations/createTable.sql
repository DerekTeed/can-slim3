DROP DATABASE IF EXISTS stocks_CAN_db;
CREATE DATABASE stocks_CAN_db;

use stocks_CAN_db;

CREATE TABLE stock_list (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    stockSymbol VARCHAR(10),
    URLNameData VARCHAR(255),
    URLStockPriceData DECIMAL(10,2),
    URLMarketCapitalizationData DECIMAL(20,2),
    debtRatio DECIMAL(10,2)
)


select * from stockList;