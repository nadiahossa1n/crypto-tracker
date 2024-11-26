import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber";

function List({ coin }) {
  return (
    <tr className="list-row">
      <td className="td-image">
        <img src={coin.image} className="coin-logo" />
      </td>
      <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      <Tooltip title="24h Price Change" placement="bottom-start">
        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
              <TrendingUpRoundedIcon />
            </div>
          </td>
        ) : (
          <td className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red td-icon">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        )}
      </Tooltip>
      <Tooltip title="Current Price">
        <td>
          <h3
            className="coin-price td-center-align"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>
      <td className="td-total-volume">
        <p className="total_volume td-right-align">
          Total Volume:<br></br>
          {coin.total_volume.toLocaleString()}
        </p>
      </td>
      <td className="desktop-td-mkt">
        <p className="total_volume td-right-align">
          Market Cap:<br></br>
          {coin.market_cap.toLocaleString()}
        </p>
      </td>
      <td className="mobile-td-mkt">
        <p className="total_volume td-right-align">
          Market Cap:<br></br>
          {convertNumber(coin.market_cap)}
        </p>
      </td>
    </tr>
  );
}

export default List;
