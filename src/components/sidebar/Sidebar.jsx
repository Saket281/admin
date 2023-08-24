import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="menu">
          <h2 className="sidebarTitle">Dashboard</h2>
          <ul className="sidebarList">
            <li className="listItem ">
              <LineStyleIcon className="icon" />
              home
            </li>
            <li className="listItem">
              <TimelineIcon className="icon" />
              Analytics
            </li>
            <li className="listItem">
              <TrendingUpIcon className="icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="listItem ">
                <PersonIcon className="icon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="listItem">
                <StorefrontIcon className="icon" />
                Products
              </li>
            </Link>
            <li className="listItem">
              <AttachMoneyIcon className="icon" />
              Transactions
            </li>
            <li className="listItem">
              <LeaderboardIcon className="icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="listItem ">
              <MailOutlineIcon className="icon" />
              Mail
            </li>
            <li className="listItem">
              <DynamicFeedIcon className="icon" />
              Feedback
            </li>
            <li className="listItem">
              <ChatBubbleOutlineIcon className="icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="listItem ">
              <WorkOutlineIcon className="icon" />
              Manage
            </li>
            <li className="listItem">
              <TimelineIcon className="icon" />
              Analytics
            </li>
            <li className="listItem">
              <ReportIcon className="icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
