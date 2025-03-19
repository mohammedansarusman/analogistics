import React, { useEffect } from "react";
import useFleetData from "../CustomHooks/useFleetData";
import { useSelector, useDispatch } from "react-redux";
import FleetDetails from "./FleetDetails";
import { changeBar, changeFleetDisplay } from "../../Store/navigationSlice";
import FleetSearchBar from "./FleetSearchBar";
import ContenLoading from "../ContenLoading";
import { FaListUl } from "react-icons/fa";
import { SlGrid } from "react-icons/sl";
const FleetList = () => {
  const dispatch = useDispatch();
  const result = useFleetData();

  dispatch(changeBar(false));
  const deleteCount = useSelector((store) => store.registration.deleteCount);

  // Fetch fleet data from Firebase and update the Redux store
  // This function should be called whenever the fleet data is updated in Firebase
  const fleetData = useSelector((store) => store.fleetRegistration.fleetRecord);
  const filteredData = useSelector(
    (store) => store.fleetRegistration.filterFleetRecord
  );
  const layout = useSelector((store) => store.navigation.displayFleet);
  const handleLayout = () => {
    layout === "grid"
      ? dispatch(changeFleetDisplay("list"))
      : dispatch(changeFleetDisplay("grid"));
  };

  if (result) {
    return <ContenLoading />;
  }

  return (
    <div className="w-full absolute left-0 top-[100px]">
      <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7 fixed z-10">
        <h1>Fleet List</h1>
        {console.log("count ", deleteCount)}
      </header>
      <div className="w-[100%] flex justify-center items-center py-[10px] pt-[70px] sm:justify-end sm:pr-[20px] gap-[20px]">
        {<FleetSearchBar fleetRecords={fleetData} />}
        <div
          className="hidden md:block hover:bg-gray-500 transition-all duration-1000 hover:rounded-full p-[10px] hover:text-white"
          onClick={handleLayout}
        >
          {layout === "grid" ? <SlGrid /> : <FaListUl />}
        </div>
      </div>
      <div
        className={`w-[100%] md:flex ${
          layout === "list" ? "md:flex-wrap" : "md:flex-col md:items-center"
        } md:justify-center`}
      >
        {filteredData.length === 0 ? (
          <div className="w-[100%] h-[50px] text-black flex justify-center items-center">
            <h1>No records found</h1>
          </div>
        ) : null}
        {/* Display fleet data */}
        {filteredData.map((fleet) => (
          <FleetDetails key={fleet.firebaseId} data={fleet} />
        ))}
      </div>
    </div>
  );
};

export default FleetList;
