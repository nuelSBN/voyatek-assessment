import { useEffect, useState } from "react";
import activity from "../../../assets/icons/RoadHorizonit.svg";
import noActivity from "../../../assets/icons/RoadHorizon.svg";
import Button from "../../../components/button";
import { ContentType } from "../../../hooks/useModal";
import ActivityDetailsCard from "../activity-detail-card";

interface Props {
  openModal: (contentType: ContentType) => void;
}

export default function ActivityIteniraryCard({ openModal }: Props) {
  const [savedActivities, setSavedActivities] = useState<unknown[]>([]);

  useEffect(() => {
    const flights = JSON.parse(localStorage.getItem("selectedFlights") || "[]");

    setSavedActivities(flights);
  }, []);

  const handleRemoveFlight = (index: number) => {
    const updatedFlights = savedActivities.filter((_, i) => i !== index);
    setSavedActivities(updatedFlights);
    localStorage.setItem("selectedFlights", JSON.stringify(updatedFlights));
  };

  return (
    <div className="min-h-[300px] rounded p-4 flex flex-col gap-4 bg-[#0054E4]">
      <div className="h-[46px] flex justify-between items-center">
        <div className="flex gap-2 items-center text-[#fff]">
          <img src={activity} alt="Flights icon" />
          <span className="text-lg leading-[26px] font-semibold">
            Activities
          </span>
        </div>
        {savedActivities.length > 0 && (
          <button
            className="bg-white p-[12px_24px] font-semibold text-sm rounded text-[#0D6EFD]"
            onClick={() => openModal("flights")}
          >
            Add Activity
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {savedActivities.length > 0 ? (
          savedActivities.map((item, index) => (
            <ActivityDetailsCard
              key={index}
              activity={item}
              onRemove={handleRemoveFlight}
              index={index}
            />
          ))
        ) : (
          <div className="rounded shadow-md bg-white h-[274px] flex flex-col justify-center items-center gap-4">
            <img src={noActivity} alt="" />
            <h2> No request yet</h2>
            <Button
              text="Add Activities"
              onClick={() => openModal("activity")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
