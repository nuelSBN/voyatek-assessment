import { IAggregationAirlines } from "../../types/flight";

interface Props {
  title: string;
  imageSrc: string;
  buttonText: string;
  CardComponent: React.FC<{ flight: IAggregationAirlines }>;
  savedItems: IAggregationAirlines[];
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  openModal: () => void;
}

export default function ItineraryCard({
  title,
  imageSrc,
  buttonText,
  CardComponent,
  savedItems,
  backgroundColor,
  textColor,
  buttonColor,
  openModal,
}: Props) {
  return (
    <div
      className="min-h-[300px] rounded p-4 flex flex-col gap-4"
      style={{ backgroundColor }}
    >
      <div className="h-[46px] flex justify-between items-center">
        <div className="flex gap-2 items-center" style={{ color: textColor }}>
          <img src={imageSrc} alt={`${title} icon`} />
          <span className="text-lg leading-[26px] font-semibold">{title}</span>
        </div>
        <button
          className="bg-white p-[12px_24px] font-semibold text-sm rounded"
          style={{ color: buttonColor }}
          onClick={openModal}
        >
          {buttonText}
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {savedItems.length > 0 ? (
          savedItems.map((item, index) => (
            <CardComponent key={index} flight={item} />
          ))
        ) : (
          <h1 className="font-semibold" style={{ color: textColor }}>
            No {title.toLowerCase()} booked yet
          </h1>
        )}
      </div>
    </div>
  );
}

//  <ItineraryCard
//   title="Flights"
//   imageSrc={airplaneFlight}
//   buttonText="Add Flight"
//   CardComponent={FlightDetailsCard}
//   savedItems={savedFlights}
//   backgroundColor="#F0F2F5"
//   textColor="#1D2433"
//   buttonColor="#0D6EFD"
//   openModal={() => openModal("flights")}
// />
