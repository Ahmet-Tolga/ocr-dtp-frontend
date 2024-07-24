import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { Tab } from 'react-bootstrap';
import product3 from '../../../assets/images/application/img-prod-3.jpg';
import ProcesstoCheckout from "./ProcesstoCheckout";
import { Link, useNavigate } from 'react-router-dom'; 
import { deleteOffer } from "../../../store/Actions/OfferAction";

const CartDetails: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const offer = useSelector((state: RootState) => state.offer);

    const handleDeleteOffer = () => {
        dispatch(deleteOffer(offer.offerId));
    };

    const handleAddOfferRedirect = () => {
        navigate("/offerPage");
    };

    // Calculate total amount
    const totalAmount = offer.offerPrice;

    // Calculate total number of items
    const totalItems = offer.offerId > 0 ? 1 : 0;

    return (
        <React.Fragment>
            <Tab.Pane eventKey="ecomtab-1" id="ecomtab-1" role="tabpanel" aria-labelledby="ecomtab-tab-1">
                <div className="row gy-4">
                    <div className="col-xl-8">
                        <div className="card">
                            <div className="card-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="progress" style={{ height: "6px" }}>
                                            <div className="progress-bar bg-primary" style={{ width: "50%" }}></div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <p className="mb-0 h6">Step 1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body border-bottom d-flex ">
                                <h5 className="mb-0">Offer Item <span className="ms-2 f-14 px-2 badge bg-light-secondary rounded-pill">{totalItems}</span></h5>
                            </div>
                            <div className="card-body p-0 table-body">
                                <div className="table-responsive">
                                    <table className="table mb-0" id="pc-dt-simple">
                                        <thead>
                                            <tr>
                                                <th>Offer</th>
                                                <th className="text-end">Offer Price</th>
                                                <th className="text-end"></th>
                                                <th className="text-end">DELETE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {offer.offerId > 0 ? (
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img src={product3} alt="image" className="bg-light wid-50 rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h5 className="mb-1">{offer.offerName}</h5>
                                                                <p className="text-sm text-muted mb-0">{offer.services.join(', ')}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <h5 className="mb-0">${offer.offerPrice}</h5>
                                                    </td>
                                                    <td className="text-center">
                                                    </td>
                                                    <td className="text-end">
                                                        <Link to="#" className="avtar avtar-s btn-link-danger btn-pc-default" onClick={handleDeleteOffer}>
                                                            <i className="ti ti-trash f-18"></i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ) : (
                                                <tr>
                                                    <td colSpan={4} className="text-center">
                                                        <p>You need to add an offer to proceed with payment.</p>
                                                        <button className="btn btn-primary" onClick={handleAddOfferRedirect}>
                                                            Go to Offers Page
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {offer.offerId > 0 && (
                        <ProcesstoCheckout isPayment={true} totalAmount={totalAmount} totalItems={totalItems} />
                    )}
                </div>
            </Tab.Pane>
        </React.Fragment>
    );
}

export default CartDetails;
