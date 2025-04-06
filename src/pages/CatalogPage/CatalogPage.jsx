import FilterCars from "../../components/FilterCars/FilterCars.jsx";
import CarsList from "../../components/CarsList/CarsList.jsx";

const CatalogPage = () => {
  return (
    <section>
      <FilterCars />
      <CarsList />
    </section>
  );
};

export default CatalogPage;
