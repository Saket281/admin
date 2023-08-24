import React from "react";
import "./widgetlg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton  " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Stats</th>
        </tr>
        <tr className="WidgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Saket Garg</span>
          </td>
          <td className="widgetLgDate">24 Aug 2022</td>
          <td className="widgetLgAmount">&#8377;120</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Saket Garg</span>
          </td>
          <td className="widgetLgDate">24 Aug 2022</td>
          <td className="widgetLgAmount">&#8377;120</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Saket Garg</span>
          </td>
          <td className="widgetLgDate">24 Aug 2022</td>
          <td className="widgetLgAmount">&#8377;120</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Saket Garg</span>
          </td>
          <td className="widgetLgDate">24 Aug 2022</td>
          <td className="widgetLgAmount">&#8377;120</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="WidgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Saket Garg</span>
          </td>
          <td className="widgetLgDate">24 Aug 2022</td>
          <td className="widgetLgAmount">&#8377;120</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
