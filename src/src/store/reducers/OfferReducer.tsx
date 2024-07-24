interface OfferState {
    offerId: number;
    offerName: string;
    offerPrice: number;
    services: string[];
  }
  
  const offerInitialState: OfferState = {
    offerId: 0,
    offerName: "",
    offerPrice: 0,
    services: []
  };
  
  export type OfferAction = 
    | { type: 'ACCEPT'; payload: { offerId: number; offerName: string; offerPrice: number; services: string[] } }
    | { type: 'DELETE'; payload: number };
  
  const offerReducer = (state = offerInitialState, action: OfferAction): OfferState => {
    switch (action.type) {
      case 'ACCEPT':
        return {
          ...state,
          offerId: action.payload.offerId,
          offerName: action.payload.offerName,
          offerPrice: action.payload.offerPrice,
          services: action.payload.services 
        };
      case 'DELETE':
        return {
          ...state,
          offerId: 0,
          offerName: "",
          offerPrice: 0,
          services: [] 
        };
      default:
        return state;
    }
  };

  export default offerReducer;