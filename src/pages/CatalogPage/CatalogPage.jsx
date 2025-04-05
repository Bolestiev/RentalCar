import React from "react";
import FilterForm from "../../components/FilterForm/FilterForm";
import CarList from "../../components/CarList/CarList";

const CatalogPage = () => {
  return (
    <div>
      <h1>Catalog of Cars</h1>
      <FilterForm />
      <CarList />
    </div>
  );
};

export default CatalogPage;
