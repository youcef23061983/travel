"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
const FlightSearchPage = () => {
  const t = useTranslations("Service");
  let flights = [
    { id: 1, price: 200, date: "2025-12-06" },
    { id: 2, price: 300, date: "2025-12-07" },
    { id: 3, price: 400, date: "2025-12-08" },
    { id: 4, price: 500, date: "2025-12-09" },
    { id: 5, price: 600, date: "2025-12-10" },
    { id: 6, price: 700, date: "2025-12-11" },
    { id: 7, price: 800, date: "2025-12-12" },
    { id: 8, price: 900, date: "2025-12-13" },
    { id: 9, price: 1000, date: "2025-12-14" },
    { id: 10, price: 1100, date: "2025-12-15" },
    { id: 11, price: 1200, date: "2025-12-16" },
    { id: 12, price: 1300, date: "2025-01-10" },
    { id: 13, price: 1400, date: "2025-02-15" },
    { id: 14, price: 1500, date: "2025-03-20" },
    { id: 15, price: 1600, date: "2025-04-25" },
    { id: 16, price: 1700, date: "2025-05-30" },
    { id: 17, price: 1800, date: "2025-06-05" },
    { id: 18, price: 1900, date: "2025-07-10" },
    { id: 19, price: 2000, date: "2025-08-15" },
    { id: 20, price: 2100, date: "2025-09-20" },
    { id: 21, price: 550, date: "2025-12-20" },
    { id: 22, price: 600, date: "2025-12-25" },
    { id: 23, price: 1350, date: "2025-02-01" },
    { id: 24, price: 1400, date: "2025-03-05" },
    { id: 25, price: 1450, date: "2025-04-10" },
    { id: 26, price: 1500, date: "2025-05-15" },
  ];
  flights = flights.map((flight) => ({
    ...flight,
    country: t(`flights.flight${flight.id}.country`),
  }));
  const initialUserState = {
    country: "all",
    date: "",
    price: 0,
  };
  const [user, setUser] = useState(initialUserState);
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const minPrice = Math.min(...flights.map((flight) => flight.price));
  const maxPrice = Math.max(...flights.map((flight) => flight.price));
  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${month}-${day}-${year}`;
  };
  const createQueryString = useCallback(() => {
    const params = new URLSearchParams();
    if (user.country !== "all") params.set("country", user.country);
    if (user.date !== "") params.set("date", user.date);
    if (user.price > 0 && user.price > minPrice) {
      params.set("price", user.price);
    } else {
      params.delete("price");
    }
    return params.toString();
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const formatDateArabic = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  };

  const handleFilter = () => {
    const queryString = createQueryString();
    router.replace(pathname + "?" + queryString);

    const filtered = flights.filter((flight) => {
      const flightCountry =
        user.country === "all" || flight.country === user.country;
      const flightDate = user.date === "" || flight.date === user.date;
      const flightPrice = user.price === 0 || flight.price >= user.price;
      return flightCountry && flightDate && flightPrice;
    });
    setFilteredFlights(filtered);
  };

  useEffect(() => {
    const updatedUserState = {
      ...initialUserState,
      country: searchParams.get("country") || "all",
      price: searchParams.get("price") || 0,
      date: searchParams.get("date") || "",
    };
    setUser(updatedUserState);
  }, [searchParams]);

  const countries = [
    "all",
    ...new Set(flights?.map((flight) => flight.country)),
  ];
  const selectDate = t("selectDate");
  const flightscountry = t("flightscountry");
  const price = t("price");
  const filter = t("filter");
  const destination = t("destination");
  const date = t("date");
  const locale = useLocale();

  return (
    <div className="p-4 mt-[30px] ">
      <div
        className="flex flex-wrap gap-4 mb-4 p-4 bg-gray-100 shadow-md rounded-lg"
        style={{
          background:
            "linear-gradient(to right bottom, #f3e1c8, #f8aa4a, #d8b38a)",
        }}
      >
        <div className="flex-1">
          <label htmlFor="date" className="block mb-2">
            {selectDate}:
          </label>
          <input
            id="date"
            type="date"
            name="date"
            value={user.date}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="country" className="block mb-2">
            {flightscountry}:
          </label>
          <select
            name="country"
            id="country"
            value={user.country}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            {countries.map((country, index) => (
              <option value={country} key={index}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="price" className=" mb-2 flex ">
            {price}: {user.price}$
          </label>
          <input
            type="range"
            name="price"
            id="price"
            value={user.price}
            min={minPrice}
            max={maxPrice}
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
      </div>
      <button onClick={handleFilter} className="link mt-[10px] mb-[10px]">
        {filter}
      </button>
      <div className="mt-4">
        <div className="flex flex-wrap gap-4">
          {filteredFlights.map((flight) => (
            <div
              key={flight.id}
              className="flex p-4 bg-white text-black  w-full justify-between items-center rounded-lg shadow-[0.5rem_0.5rem_3rem_inset_#95615e]"
            >
              <p className="mb-0 flex">
                {destination}: {flight.country}
              </p>
              <p className="mb-0 flex">
                {price}: {flight.price}$
              </p>
              <p className="mb-0 flex">
                {date}:{" "}
                {
                  locale === "en"
                    ? formatDate(flight.date) // MM-DD-YYYY
                    : formatDateArabic(flight.date) // DD-MM-YYYY
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchPage;
