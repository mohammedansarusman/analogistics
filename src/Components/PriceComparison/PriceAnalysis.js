import React from "react";
import { useSelector } from "react-redux";
import StartingPointDropdown from "./StartingPointDropdown";
import EndPointDropDown from "./EndPointDropDown";
import usePriceComparison from "../CustomHooks/usePriceComparison";
import aaa from "../../Images/Supplier/aaa_logo.png";
import amct from "../../Images/Supplier/amct_logo.png";
import emirates from "../../Images/Supplier/emirates_logo.svg";

const PriceAnalysis = () => {
  const mode = useSelector(store=>store.navigation.mode);
  const brandStatus = useSelector((store) => store.price.brand);
  const typeStatus = useSelector((store) => store.price.type);
  const truckStatus = useSelector((store) => store.price.truckSize);
  const result = usePriceComparison();
  return (
    <div className={`${mode === "light" ? "bg-gray-100" : "bg-gray-500"} w-[80%] flex flex-col items-center`}>
      <header className="py-[20px]">
        <h1 className="text-2xl font-semibold text-gray-500">
          Supplier Price Comparison
        </h1>
      </header>
      <div className="w-[200px] h-[70px] flex justify-center items-center">
        {brandStatus === "porsche" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 4500 300"
            className="w-48 h-auto text-white"
          >
            <title>Porsche</title>
            <path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path>
          </svg>
        )}
        {brandStatus === "vw" && (
          <svg
            role="img"
            aria-label="Volkswagen"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <title>Volkswagen</title>
            <path d="M12 22.586c-5.786 0-10.543-4.8-10.543-10.586 0-1.2.214-2.357.6-3.471l6.172 12c.085.171.171.3.385.3.215 0 .3-.129.386-.3l2.871-6.386q.064-.129.129-.129c.086 0 .086.086.129.129l2.914 6.386c.086.171.171.3.386.3.214 0 .3-.129.385-.3l6.172-12c.385 1.071.6 2.228.6 3.471-.043 5.786-4.8 10.586-10.586 10.586m0-13.329c-.086 0-.086-.086-.129-.128l-3.3-7.115a10.12 10.12 0 0 1 6.858 0l-3.3 7.115c-.043.042-.043.128-.129.128m-3.471 7.714c-.086 0-.086-.085-.129-.128L3 6.47c.943-1.542 2.314-2.828 3.9-3.728l3.814 8.228c.086.172.172.215.3.215h1.972c.128 0 .214-.043.3-.215l3.771-8.228c1.586.9 2.957 2.186 3.9 3.728L15.6 16.843q-.065.128-.129.128c-.085 0-.085-.085-.128-.128L13.286 12.3c-.086-.171-.172-.214-.3-.214h-1.972c-.128 0-.214.043-.3.214l-2.057 4.543c-.043.043-.043.128-.128.128M12 24c6.643 0 12-5.357 12-12S18.643 0 12 0 0 5.357 0 12s5.357 12 12 12"></path>
          </svg>
        )}
        {brandStatus === "audi" && (
          <svg
            height="24"
            width="69"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            // fill-rule="evenodd"
            // viewBox="0 0 24 69"
          >
            <path d="M56.927 0a11.798 11.798 0 00-7.495 2.671A11.906 11.906 0 0041.9 0a11.719 11.719 0 00-7.494 2.671C32.347 1.006 29.745 0 26.91 0a11.798 11.798 0 00-7.494 2.671C17.358 1.006 14.756 0 11.92 0 5.32 0 0 5.303 0 11.884c0 6.58 5.32 11.884 11.921 11.884 2.835 0 5.475-1.007 7.495-2.671 2.058 1.664 4.66 2.67 7.494 2.67 2.835 0 5.475-1.006 7.495-2.67a11.906 11.906 0 007.533 2.67c2.874 0 5.475-1.006 7.533-2.67 2.058 1.664 4.66 2.67 7.495 2.67 6.601 0 11.921-5.302 11.921-11.883C68.848 5.342 63.528 0 56.927 0zm-7.495 17.226a9.126 9.126 0 01-1.708-5.342c0-1.974.621-3.832 1.708-5.342a9.126 9.126 0 011.709 5.342c0 2.013-.66 3.832-1.709 5.342zm-15.027 0a9.126 9.126 0 01-1.709-5.342c0-1.974.621-3.832 1.709-5.342a9.126 9.126 0 011.708 5.342c0 2.013-.66 3.832-1.708 5.342zm-15.028 0a9.126 9.126 0 01-1.709-5.342c0-1.974.622-3.832 1.709-5.342a9.126 9.126 0 011.708 5.342c0 2.013-.66 3.832-1.708 5.342zM2.602 11.884c0-5.071 4.116-9.213 9.242-9.213a9.22 9.22 0 015.63 1.897c-1.592 2.013-2.524 4.529-2.524 7.316 0 2.748.932 5.303 2.524 7.316-1.553 1.2-3.495 1.897-5.63 1.897-5.087 0-9.242-4.103-9.242-9.213zM21.24 19.2c1.592-2.013 2.524-4.529 2.524-7.316 0-2.749-.932-5.303-2.524-7.316 1.553-1.2 3.495-1.897 5.63-1.897 2.136 0 4.078.697 5.63 1.897-1.591 2.013-2.523 4.529-2.523 7.316 0 2.748.932 5.303 2.524 7.316-1.553 1.2-3.495 1.897-5.63 1.897-2.136 0-4.078-.697-5.631-1.897zm15.028 0c1.592-2.013 2.524-4.529 2.524-7.316 0-2.749-.932-5.303-2.524-7.316 1.553-1.2 3.494-1.897 5.63-1.897a9.22 9.22 0 015.63 1.897c-1.591 2.013-2.523 4.529-2.523 7.316 0 2.748.932 5.303 2.524 7.316-1.554 1.2-3.495 1.897-5.63 1.897a9.22 9.22 0 01-5.631-1.897zm20.658 1.897a9.22 9.22 0 01-5.63-1.897c1.591-2.013 2.523-4.529 2.523-7.316 0-2.749-.932-5.303-2.524-7.316 1.554-1.2 3.495-1.897 5.63-1.897 5.088 0 9.243 4.103 9.243 9.213 0 5.11-4.155 9.213-9.242 9.213z"></path>
          </svg>
        )}
      </div>
      <div className={`font-bold text-2xl ${mode==='light' ? "text-gray-600" : "text-white"}`}>{typeStatus}</div>
      <div className="text-2xl  text-red-400 font-bold py-3">
        {truckStatus}
      </div>
      <div className="flex flex-col w-full items-center md:flex md:flex-row md:justify-around md:px-5">
        {truckStatus && <StartingPointDropdown />}
        {truckStatus && <EndPointDropDown />}
      </div>

      <div className="w-full flex flex-col items-center py-[50px] gap-3 text-gray-500 md:flex md:flex-row md:justify-around">
        <div className="flex flex-col items-center">
          <div className=" bg-gray-400 w-[150px] h-[150px] flex justify-center items-center">
            <img src={aaa} className="object-contain w-[120px] h-[120px]" alt="aaa-logo"></img>
          </div>
          {result.length === 1 && (
            <p className={`text-xl font-semibold ${mode === "light" ? "text-gray-800" : "text-white"}`}>
              {result[0].aaaPrice
                ? "AED " + result[0].aaaPrice
                : "Price is not available"}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 w-[150px] h-[150px] flex justify-center items-center">
            <img src={amct} className="object-fit w-[120px] h-[120px]" alt="amct-logo"></img>
          </div>
          {result.length === 1 && (
            <p className={`text-xl font-semibold ${mode === "light" ? "text-gray-800" : "text-white"}`}>
              {result[0].amctPrice
                ? "AED " + result[0].amctPrice
                : "Price is not available"}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-400 w-[150px] h-[150px] flex justify-center items-center">
            <img
              src={emirates}
              alt="emirates-logo"
              className="object-contain w-[120px] h-[120px]"
            ></img>
          </div>
          {result.length === 1 && (
            <p className={`text-xl font-semibold ${mode === "light" ? "text-gray-800" : "text-white"}`}>
              {result[0].emiratesPrice
                ? "AED " + result[0].emiratesPrice
                : "Price is not available"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceAnalysis;
