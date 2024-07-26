import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./sidebar.css";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
    const router = useLocation();
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState<any>({});
    const { user, isLoggedIn } = useAuth();
    const {logout}=useAuth();

    // Menü öğelerini burada tanımlıyoruz
    const dashboardMenu = {
        id: 1, label: "Dashboard", icon: "ph-duotone ph-gauge", link: "/", visible: true
    };
    const projectsMenu = {
        id: 2, label: "Projects", icon: "ph-duotone ph-calendar-blank", link: "/projects", visible: isLoggedIn
    };
    const offersMenu = {
        id: 3, label: "Offers", icon: "ph-duotone ph-flag", link: "/offerPage", visible: isLoggedIn
    };
    const createOfferMenu = {
        id: 4, label: "Create new Offer", icon: "ph-duotone ph-gear-six", link: "/offer", visible: user?.role == "customer" || !isLoggedIn
    };
    const profileMenu = {
        id: 5, label: "Profile", icon: "ph-duotone ph-user-circle", link: "/profile", visible: isLoggedIn && user?.role !== "admin"
    };
    const paymentMenu = {
        id: 6, label: "Payment", icon: "ph-duotone ph-gauge", link: "/payment", visible: isLoggedIn && user?.role !== "customer"
    };
    const logoutMenu = {
        id: 7, label: "Log out", icon: "ph-duotone ph-user-circle", visible: isLoggedIn
    };

    const menuItems = [
        dashboardMenu,
        projectsMenu,
        offersMenu,
        createOfferMenu,
        profileMenu,
        paymentMenu,
        logoutMenu
    ];

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

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="sidebar">
            <h2 style={{ color: "white", textAlign: "center", marginTop: "30px" }}>Services</h2>
            <ul>
                {dashboardMenu.visible && (
                    <li className={`pc-item ${isMenuActive(dashboardMenu) ? "active" : ""}`}>
                        <Link to={dashboardMenu.link} data-page="index" className="pc-link">
                            <span className="pc-micon">
                                <i className={`${dashboardMenu.icon}`}></i>
                            </span>
                            <span className="pc-mtext">{dashboardMenu.label}</span>
                        </Link>
                    </li>
                )}
                {projectsMenu.visible && (
                    <li className={`pc-item ${isMenuActive(projectsMenu) ? "active" : ""}`}>
                        <Link to={projectsMenu.link} data-page="index" className="pc-link">
                            <span className="pc-micon">
                                <i className={`${projectsMenu.icon}`}></i>
                            </span>
                            <span className="pc-mtext">{projectsMenu.label}</span>
                        </Link>
                    </li>
                )}
                {offersMenu.visible && (
                    <li className={`pc-item ${isMenuActive(offersMenu) ? "active" : ""}`}>
                        <Link to={offersMenu.link} data-page="index" className="pc-link">
                            <span className="pc-micon">
                                <i className={`${offersMenu.icon}`}></i>
                            </span>
                            <span className="pc-mtext">{offersMenu.label}</span>
                        </Link>
                    </li>
                )}
                {createOfferMenu.visible && (
                    <li className={`pc-item ${isMenuActive(createOfferMenu) ? "active" : ""}`}>
                        <Link to={createOfferMenu.link} data-page="index" className="pc-link">
                            <span className="pc-micon">
                                <i className={`${createOfferMenu.icon}`}></i>
                            </span>
                            <span className="pc-mtext">{createOfferMenu.label}</span>
                        </Link>
                    </li>
                )}
                {profileMenu.visible && (
                    <li className={`pc-item ${isMenuActive(profileMenu) ? "active" : ""}`}>
                        <Link to={profileMenu.link} data-page="index" className="pc-link">
                            <span className="pc-micon">
                                <i className={`${profileMenu.icon}`}></i>
                            </span>
                            <span className="pc-mtext">{profileMenu.label}</span>
                        </Link>
                    </li>
                )}
                {paymentMenu.visible && (
                    <li className={`pc-item ${isMenuActive(paymentMenu) ? "active" : ""}`}>
                        <Link to={paymentMenu.link} data-page="index" className="pc-link">
                            <span className="pc-micon">
                                <i className={`${paymentMenu.icon}`}></i>
                            </span>
                            <span className="pc-mtext">{paymentMenu.label}</span>
                        </Link>
                    </li>
                )}
                {logoutMenu.visible && (
                    <li className={`pc-item ${isMenuActive(logoutMenu) ? "active" : ""}`}>
                        <span className="pc-link" onClick={handleLogout}>
                            <span className="pc-micon">
                                <i className={`${logoutMenu.icon}`}></i>
                            </span>
                            <span className="pc-mtext">{logoutMenu.label}</span>
                        </span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
