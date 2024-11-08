export interface IHotelResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: {
    hotels: IHotel[];
  };
}

export interface IHotel {
  hotel_id: number;
  accessibilityLabel: string;
  property: {
    checkinDate: string;
    qualityClass: number;
    optOutFromGalleryChanges: number;
    ufi: number;
    reviewScore: number;
    countryCode: string;
    id: number;
    photoUrls: string[];
    latitude: number;
    priceBreakdown: {
      taxExceptions: [];
      strikethroughPrice: {
        currency: string;
        value: number;
      };
      excludedPrice: {
        value: number;
        currency: string;
      };
      grossPrice: {
        value: number;
        currency: string;
      };
      benefitBadges: [
        {
          explanation: string;
          variant: string;
          text: string;
          identifier: string;
        }
      ];
    };
    wishlistName: string;
    currency: string;
    longitude: number;
    checkin: {
      untilTime: string;
      fromTime: string;
    };
    checkout: {
      untilTime: string;
      fromTime: string;
    };
    blockIds: string[];
    checkoutDate: string;
    mainPhotoId: number;
    propertyClass: number;
    reviewCount: number;
    isPreferred: boolean;
    reviewScoreWord: string;
    name: string;
    rankingPosition: number;
    isFirstPage: boolean;
    position: number;
    accuratePropertyClass: number;
  };
}
