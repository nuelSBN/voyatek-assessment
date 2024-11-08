import useActivitySearch from "../../../hooks/useActivityQuery";

export default function ActivityModalComponent() {
  const activity = useActivitySearch();

  console.log(activity);

  return (
    <div className="p-6 bg-white rounded-md">
      <h1>Activity form</h1>
    </div>
  );
}
