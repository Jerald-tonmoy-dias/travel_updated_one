import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BASE_URL } from "../BaseUrl";
// creating context api
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  /**********************************
   *
   * GLOABL STATES
   *
   **********************************/
  // count steps
  const [countSteps, setCountSteps] = useState(1);


  /**********************************
   *
   *  travelInsurance
   *
   **********************************/
  const [travelInsurance, setTravelInsurance] = useState({
    insuranceCover: "",//has validation
    countryList: [],
    is_gadget_cover: false,
    is_winter_sports_cover: false,
    is_cruise_cover: false,
    is_business_trip_cover: false,
    is_region_united_kingdom: false,
    is_region_europe: false,
    is_region_worldwide_excl_USA_canada_caribbean_Mexico: false,
    is_region_worldwide: false,
    dateOftrip: '',//has validation
    monthsToCoverIns: "",
    dateOftrip: "",
    returnDateOftrip: "",
    monthLengthsTocover: "",
    howWantToInsure: "",//has validation
    totalTraveller: "",
    firstTravellerBorn: "",
    secondTravellerBorn: "",
    thirdTravellerBorn: "",
    fouthTravellerBorn: "",
    fifthTravellerBorn: "",
    sixthTravellerBorn: "",
    sevenTravellerBorn: "",
    eightTravellerBorn: "",
    ninthTravellerBorn: "",
    tenthTravellerBorn: "",
    maxExcess: "",//has validation
    cancellationCover: "",//has validation
    baggageCover: "",//has validation
    dateOfBirthTraveller: [],
    medicalCover: "",//has validation
    preMedicalCondition: "",
    thirdPartyMedicalCondition: "",
    email: "",//has validation
    firstName: "",//has validation
    lastName: "",//has validation
    contactWithEmail: false,
    contactWithPhone: false,
    contactWithText: false,
    contactWithPost: false,
    dontContact: false,
    termsAgree: false//has validation

  });
  return (
    <StoreContext.Provider
      value={{
        // global states
        countSteps,
        setCountSteps,
        // travel insurance data
        travelInsurance, setTravelInsurance
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
