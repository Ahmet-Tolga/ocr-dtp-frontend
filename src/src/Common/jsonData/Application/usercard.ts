import avatar1 from "../../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../../assets/images/user/avatar-3.jpg";
import avatar4 from "../../../assets/images/user/avatar-4.jpg";
import avatar5 from "../../../assets/images/user/avatar-5.jpg";
import avatar6 from "../../../assets/images/user/avatar-6.jpg";
import avatar7 from "../../../assets/images/user/avatar-7.jpg";
import avatar8 from "../../../assets/images/user/avatar-8.jpg";
import avatar9 from "../../../assets/images/user/avatar-9.jpg";

import usercover1 from '../../../assets/images/application/img-user-cover-1.jpg'
import usercover2 from "../../../assets/images/application/img-user-cover-2.jpg";
import usercover3 from "../../../assets/images/application/img-user-cover-3.jpg";
import usercover4 from "../../../assets/images/application/img-user-cover-4.jpg";
import usercover5 from "../../../assets/images/application/img-user-cover-5.jpg";
import usercover6 from "../../../assets/images/application/img-user-cover-6.jpg";
import usercover7 from "../../../assets/images/application/img-user-cover-7.jpg";
import usercover8 from "../../../assets/images/application/img-user-cover-8.jpg";
import usercover9 from "../../../assets/images/application/img-user-cover-9.jpg";

const userCard = [
    {
        id: 1,
        offerName:"offer1",
        offerPrice:30,
        avatar: avatar1,
        bgImage: usercover1,
        services:[
            "DTP","OCR"
        ],
        color: "danger",
        task_completion: "30%"
    },
    {
        id: 2,
        offerName:"offer2",
        offerPrice:40,
        avatar: avatar2,
        bgImage: usercover2,
        services:[
            "DTP","TRANSLATION"
        ],
        color: "primary",
        task_completion: "60%"
    },
    {
        id: 3,
        offerName:"offer3",
        offerPrice:100,
        avatar: avatar3,
        bgImage: usercover3,
        services:[
            "DTP"
        ],
        color: "success",
        task_completion: "90%"
    },
    {
        id: 4,
        offerName:"offer4",
        offerPrice:65,
        avatar: avatar4,
        bgImage: usercover4,
        services:[
            "OCR"
        ],
        color: "warning",
        task_completion: "40%"
    },

];
export { userCard };
