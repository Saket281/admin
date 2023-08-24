import React from "react";
import "./home.css";
import FeaturedInfo from "../../featureInfo/FeaturedInfo";
import Charts from "../../charts/Charts";
import { userData } from "../../dummyData";
import WidgetLg from "../../widgetlg/WidgetLg";
import WidgetSm from "../../widgetssm/WidgetSm";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        data={userData}
        title="Sales Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
