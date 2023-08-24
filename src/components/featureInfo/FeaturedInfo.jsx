import React from "react";
import "./featuredinfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredContainer">
          <span className="featuredMoney">&#8377;23,745</span>
          <span className="featuredRate">
            -13.2 <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <div className="sub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredContainer">
          <span className="featuredMoney">&#8377;14,200</span>
          <span className="featuredRate">
            -1.4 <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <div className="sub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredContainer">
          <span className="featuredMoney">&#8377;2,800</span>
          <span className="featuredRate">
            +2.2 <ArrowUpwardIcon className="featuredIcon positive" />
          </span>
        </div>
        <div className="sub">Compared to last month</div>
      </div>
    </div>
  );
}

export default FeaturedInfo;
