const menuItems = [
    {
        type: "HASHMENU", id: 1, label: "Dashboard", icon: "ph-duotone ph-gauge", dataPage: null,link:"/"
    },
    {
        type: "HASHMENU", id: 1, label: "Projects", icon: "ph-duotone ph-calendar-blank", dataPage: null,link:"/projects"
    },
    {
        type: "HASHMENU", id: 1, label: "Offers", icon: "ph-duotone ph-flag", dataPage: null,link:"/offerPage"
    },
    {
        type: "HASHMENU", id: 1, label: "Create new Offer", icon: "ph-duotone ph-gear-six", dataPage: null,link:"/offer"
    },
    {
        type: "HASHMENU", id: 1, label: "Profile", icon: "ph-duotone ph-user-circle", dataPage: null,link:"/profile"  
    },
    {
        type: "HASHMENU", id: 1, label: "Payment", icon: "ph-duotone ph-gauge", dataPage: null,link:"/payment"  
    },
    {
        type: "HASHMENU", id: 1, label: "Log out", icon: "ph-duotone ph-user-circle", dataPage: null,link:"http://localhost:8002/api/v1/logout"  
    }
];

export { menuItems };