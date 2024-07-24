import { OfferAction } from "../reducers/OfferReducer";


export const acceptOffer = (offerId: number, offerName: string, offerPrice: number, services: string[]): OfferAction => ({
  type: 'ACCEPT',
  payload: { offerId, offerName, offerPrice, services }
});

export const deleteOffer = (offerId: number): OfferAction => ({
  type: 'DELETE',
  payload: offerId
});
