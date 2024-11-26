import { createSelector } from "@ngrx/store";
import { AppState } from "../../../models/store.model";

export const selectFeature = (state: AppState) => state.customers;

export const loadingSelector = createSelector(
  selectFeature,
  (state) => state.loading,
);

export const customersSelector = createSelector(
  selectFeature,
  (state) => state.customers,
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error,
);
