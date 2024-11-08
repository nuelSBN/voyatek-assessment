export type TSortBy = "BEST" | "CHEAPEST" | "FASTEST";

export interface IFLightResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: {
    aggregation: IAggregation;
  };
}

export interface IAggregation {
  totalCount: number;
  filteredTotalCount: number;
  stops: IAggregationStops[];
  airlines: IAggregationAirlines[];
  departureIntervals: IAggregationDepartureIntervals[];
}

interface IAggregationStops {
  numberOfStops: number;
  count: number;
  minPrice: {
    currencyCode: string;
    units: number;
    nanos: number;
  };
  minPriceRound: {
    currencyCode: string;
    units: number;
    nanos: number;
  };
}

interface IAggregationAirlines {
  name: string;
  logoUrl: string;
  iataCode: string;
  count: number;
  minPrice: {
    currencyCode: string;
    units: number;
    nanos: number;
  };
}

interface IAggregationDepartureIntervals {
  start: string;
  end: string;
}

interface IAggregationFlightTimes {
  arrival: {
    start: string;
    end: string;
    count: number;
  }[];
  departure: {
    start: string;
    end: string;
    count: number;
  }[];
}
