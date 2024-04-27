
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { CharacterItem, FavouritesState } from "../../types/types";

const initialState: any = {
    favourites: [],
};
if (localStorage.getItem("favourites")) {
    initialState.favourites = [...JSON.parse(localStorage.getItem("favourites")  || "")];
  } else {
    initialState.favourites = [];
  }

const simpleSlice = createSlice({
    name: "slicename",
    initialState,
    reducers: {
        // setFavourites: (state, action: PayloadAction<CharacterItem[]>) => {
        setFavourites: (state, action: PayloadAction<any[]>) => {
            state.favourites = action.payload;
            localStorage.setItem("favourites", JSON.stringify(state.favourites));
        },
    }
});

export const { setFavourites } = simpleSlice.actions;

export default simpleSlice.reducer;



