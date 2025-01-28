"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const FlightSearchPage = () => {
  const flights = [
    { id: 1, country: "Casa Blanca", price: 200, date: "2025-12-06" },
    { id: 2, country: "Algiers", price: 300, date: "2025-12-07" },
    { id: 3, country: "jadah", price: 400, date: "2025-12-08" },
    { id: 4, country: "Dubai", price: 500, date: "2025-12-09" },
    { id: 5, country: "istanbul", price: 600, date: "2025-12-10" },
    { id: 6, country: "dawha", price: 700, date: "2025-12-11" },
    { id: 7, country: "cairo", price: 800, date: "2025-12-12" },
    { id: 8, country: "muskat", price: 900, date: "2025-12-13" },
    { id: 9, country: "kwala lampur", price: 1000, date: "2025-12-14" },
    { id: 10, country: "jakarta", price: 1100, date: "2025-12-15" },
    { id: 11, country: "tahran", price: 1200, date: "2025-12-16" },
    { id: 12, country: "Paris", price: 1300, date: "2025-01-10" },
    { id: 13, country: "London", price: 1400, date: "2025-02-15" },
    { id: 14, country: "Berlin", price: 1500, date: "2025-03-20" },
    { id: 15, country: "Madrid", price: 1600, date: "2025-04-25" },
    { id: 16, country: "Rome", price: 1700, date: "2025-05-30" },
    { id: 17, country: "Vienna", price: 1800, date: "2025-06-05" },
    { id: 18, country: "Amsterdam", price: 1900, date: "2025-07-10" },
    { id: 19, country: "Brussels", price: 2000, date: "2025-08-15" },
    { id: 20, country: "Lisbon", price: 2100, date: "2025-09-20" },
  ];

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

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      if (value === "" || value === "0" || value === "all" || value === "200") {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      const updatedUser = { ...prevUser, [name]: value };
      router.replace(pathname + "?" + createQueryString(name, value));
      return updatedUser;
    });
  };

  const handleFilter = () => {
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
  const minPrice = Math.min(...flights.map((flight) => flight.price));
  const maxPrice = Math.max(...flights.map((flight) => flight.price));
  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${month}-${day}-${year}`;
  };
  return (
    <div>
      <h2>FlightSearch</h2>
      <h2>{user.date}</h2>
      <div>
        <label htmlFor="date">Select Date:</label>
        <input
          id="date"
          type="date"
          name="date"
          value={user.date}
          onChange={handleChange}
        />
      </div>
      <div className="searchElement">
        <label htmlFor="country">Flights Country</label>
        <select
          name="country"
          id="country"
          value={user.country}
          onChange={handleChange}
          className="formSelect"
        >
          {countries.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="searchElement">
        <label htmlFor="price">price: {user.price} $</label>
        <input
          type="range"
          name="price"
          id="price"
          value={user.price}
          min={minPrice}
          max={maxPrice}
          onChange={handleChange}
          className="formSelect"
        />
      </div>
      <button onClick={handleFilter}>Filter Flights</button>
      <div>
        <h3>Filtered Flights:</h3>
        <ul>
          {filteredFlights.map((flight) => (
            <li key={flight.id}>
              {flight.country} - ${flight.price} - {formatDate(flight.date)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightSearchPage;
