import { createSelector } from "reselect";

const selectState = state => state;

export const selectError = createSelector(
  [selectState],
  state => state.error
);

export const selectCryptos = createSelector(
  [selectState],
  state => state.cryptos
);

export const selectPrevious = createSelector(
  [selectState],
  state => state.previous
);

export const selectNext = createSelector(
  [selectState],
  state => state.next
);

export const selectLoading = createSelector(
  [selectState],
  state => state.isFetching
);
