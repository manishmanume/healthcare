import { useState, useEffect } from 'react';
import {FiSearch, FiSettings, FiBell, FiGrid,} from 'react-icons/fi';
import { FcStatistics } from "react-icons/fc";
import { CiCalendarDate } from "react-icons/ci";
import { MdHistoryToggleOff } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import './NavSide.css'
import MainDashboard from '../Dashboard/MainDashBoard/MainDashboard';

const NavbarSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div 
        className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'} ${
          isMobile ? 'sidebar-mobile' : ''
        }`}
      >
        {isSidebarOpen && (
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h1 className="app-name">Health<span style={{color:'#213448'}}>care.</span></h1>
              {isMobile && (
                <button 
                  onClick={toggleSidebar}
                  className="close-sidebar-btn"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="sidebar-section">
              <h2 className="section-title">General</h2>
              <ul className="nav-list">
                <NavItem icon={<RxDashboard className="nav-icon icon-indigo" />} text="Dashboard" />
                <NavItem icon={<MdHistoryToggleOff className="nav-icon icon-pink" />} text="History" />
                <NavItem icon={<CiCalendarDate className="nav-icon icon-blue" />} text="Calender" />
                <NavItem icon={<CiSquarePlus className="nav-icon icon-blue" />} text="Appointment" />
                <NavItem icon={<FcStatistics className="nav-icon icon-blue" />} text="Statistics" />
              </ul>
            </div>

            <div className="sidebar-section">
              <h2 className="section-title">tool</h2>
              <ul className="nav-list">
                <NavItem icon={<FaRocketchat className="nav-icon icon-green" />} text="Chat" />
                <NavItem icon={<FaPhoneAlt className="nav-icon icon-yellow" />} text="Support" />
              </ul>
            </div>
            <div className="sidebar-footer">
              <NavItem icon={<FiSettings className="nav-icon icon-gray" />} text="Settings" />
            </div>
          </div>
        )}
      </div>

      <div className="main-content">
        <header className="navbar">
          <div className="navbar-container">
            <button 
              onClick={toggleSidebar}
              className="menu-btn"
            >
              <FiGrid className="menu-icon" />
            </button>

            <div className="search-container">
              <div className="search-box">
                <div className="search-icon">
                  <FiSearch className="search-icon-img" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
              </div>
            </div>

            <div className="user-actions">
              <button className="action-btn">
                <FiBell className="action-icon" />
              </button>
              <div className="user-profile">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User profile"
                  className="profile-img"
                />
                <span className="online-status"></span>
              </div>
            </div>
          </div>
        </header>

        <main className="content-area">
          <div className="content-container">
            <MainDashboard/>
          </div>
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text }) => {
  return (
    <li className="nav-item">
      <a
        href="#"
        className="nav-link"
      >
        <span className="nav-link-icon">{icon}</span>
        <span className="nav-link-text">{text}</span>
      </a>
    </li>
  );
};

export default NavbarSidebar;