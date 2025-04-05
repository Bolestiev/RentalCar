import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchBrands } from "./operations";

const initialState = {
  cars: [],
  brands: [],
  totalCars: 0,
  loading: false,
  error: null,
  currentPage: 1,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearCars: (state) => {
      state.cars = [];
      state.totalCars = 0;
      state.loading = false;
      state.error = null;
      state.currentPage = 1;
    },
    incrementPage: (state) => {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;

        state.cars =
          state.currentPage === 1
            ? action.payload.cars
            : [...state.cars, ...action.payload.cars];
        state.totalCars = action.payload.totalCars;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.cars = [];
        state.totalCars = 0;
      });

    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.brands = [];
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.brands = [];
      });
  },
});

export const { clearCars, incrementPage } = carSlice.actions;
export default carSlice.reducer;
