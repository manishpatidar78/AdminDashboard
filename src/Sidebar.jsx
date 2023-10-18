import React from "react";
import { BsChevronDown } from "react-icons/bs";

import {
  BsFillNutFill,
  BsGrid1X2Fill,
  BsFillArchiveFill, 
  BsPeopleFill,
  BsWalletFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,BsFillPatchQuestionFill, BsChevronRight
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsFillNutFill className="icon_header" /> Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <div className="sidebar_list">
            <div>            
                <BsGrid1X2Fill className="icon" /> Dashboard    
            </div>
            <div>
          <BsChevronRight />
            </div>
          </div>
        </li>
        <li className="sidebar-list-item">
        <div className="sidebar_list">
            <div>            
                <BsFillArchiveFill className="icon" /> Product     
            </div>
            <div>
          <BsChevronRight />
            </div>
          </div>
          </li>
        <li className="sidebar-list-item">
        <div className="sidebar_list">
            <div>            
                <BsPeopleFill className="icon" /> Customers     
            </div>
            <div>
          <BsChevronRight />
            </div>
          </div>
        </li>
    
        <li className="sidebar-list-item">
        <div className="sidebar_list">
            <div>            
                <BsWalletFill className="icon" /> Income      
            </div>
            <div>
          <BsChevronRight />
            </div>
          </div>
        </li>
        <li className="sidebar-list-item">
        <div className="sidebar_list">
            <div>            
                <BsMenuButtonWideFill className="icon" /> Promote 
            </div>
            <div>
          <BsChevronRight />
            </div>
          </div>
        </li>
        <li className="sidebar-list-item">
        <div className="sidebar_list">
            <div>            
                <BsFillPatchQuestionFill className="icon" /> Help       
            </div>
            <div>
          <BsChevronRight />
            </div>
          </div>
        </li>
      </ul>
      <div className="sidbar_Admin">
        <div>
          <img className="sidebar_img" src="https://picsum.photos/150" alt="" />
        </div>
        <div>
          <h4>Evano  </h4>
          <p>Project Manager</p>
        </div>
        <div> <BsChevronDown /> </div>
      </div>
    </aside>
  );
}

export default Sidebar;
