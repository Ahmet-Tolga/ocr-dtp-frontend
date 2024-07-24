import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { menuItems } from "./MenuData";
import "./sidebar.css";

const Sidebar = () => {
    const router = useLocation();
    const [openMenu, setOpenMenu] = useState<any>({});

    const handleMenuClick = (id: any) => {
        setOpenMenu((prevOpenMenu: any) => ({
            ...prevOpenMenu,
            [id]: !prevOpenMenu[id]
        }));
    };

    useEffect(() => {
        const initialOpenMenu: any = {};

        const checkSubmenu = (submenu: any) => {
            if (!submenu) return false;
            return submenu.some((subItem: any) => router.pathname.startsWith(subItem.link));
        };

        menuItems.forEach((menuItem: any) => {
            if (menuItem.submenu) {
                initialOpenMenu[menuItem.id] = checkSubmenu(menuItem.submenu);
                menuItem.submenu.forEach((subItem: any) => {
                    if (subItem.submenu) {
                        initialOpenMenu[subItem.id] = checkSubmenu(subItem.submenu);
                    }
                });
            } else {
                initialOpenMenu[menuItem.id] = router.pathname === menuItem.link;
            }
        });

        setOpenMenu(initialOpenMenu);
    }, [router.pathname]);

    useEffect(() => {
        localStorage.setItem("openMenu", JSON.stringify(openMenu));
    }, [openMenu]);

    const isMenuActive = (menuItem: any) => {
        return router.pathname === menuItem.link;
    };

    return (
        <div className="sidebar">
            <h2 style={{color:"white",textAlign:"center",marginTop:"30px"}}>Services</h2>
            <ul>
                {(menuItems || []).map((item: any, key: any) => (
                    <React.Fragment key={key}>
                        {!item["isHeader"] ? (
                            <>
                                {!item.submenu ? (
                                    <li className={`pc-item ${isMenuActive(item) ? "active" : ""}`}>
                                        <Link to={item.link && item.link} data-page="index" className="pc-link">
                                            <span className="pc-micon">
                                                <i className={`${item.icon}`}></i>
                                            </span>
                                            <span className="pc-mtext">{item.label}</span>
                                            {item.badge ? (
                                                <span className="pc-badge">{item.badge}</span>
                                            ) : (
                                                ""
                                            )}
                                        </Link>
                                    </li>
                                ) : (
                                    <li className={`pc-item pc-hasmenu ${openMenu[item.id] || item.submenu?.some((subItem: any) => isMenuActive(subItem)) ? "pc-trigger active" : ""}`}>
                                        <span className="pc-link" onClick={() => handleMenuClick(item.id)}>
                                            <span className="pc-micon">
                                                <i className={`${item.icon}`}></i>
                                            </span>
                                            <span className="pc-mtext">{item.label}</span>
                                            <span className="pc-arrow">
                                                <FeatherIcon icon="chevron-right" />
                                            </span>
                                        </span>
                                        <ul className={`pc-submenu ${openMenu[item.id] ? "open" : ""}`}>
                                            {(item.submenu || []).map((subItem: any, key: any) => (
                                                !subItem.submenu ? (
                                                    <li className={`pc-item ${isMenuActive(subItem) ? "active" : ""}`} key={key}>
                                                        <Link className="pc-link" to={subItem.link || "#"} data-page={subItem.dataPage}>
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ) : (
                                                    <li className={`pc-item ${isMenuActive(subItem) ? "active" : ""}`} key={key}>
                                                        <Link className="pc-link" to={subItem.link || "#"} data-page={subItem.dataPage}>
                                                            {subItem.label}
                                                        </Link>
                                                        <ul className="pc-submenu" style={{ display: openMenu[item.id] ? "block" : "none" }}>
                                                            {(subItem.submenu || []).map((childItem: any, key: any) => (
                                                                <li className="pc-item" key={key}>
                                                                    <Link className="pc-link" target="_blank" to="/pages/login-v1">
                                                                        {childItem.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                )
                                            ))}
                                        </ul>
                                    </li>
                                )}
                            </>
                        ) : (
                            <li className="pc-item pc-caption">
                                <label>{item.label}</label>
                            </li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
