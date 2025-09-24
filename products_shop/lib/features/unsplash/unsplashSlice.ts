import { UnsPlash } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UnsplashState {
  selectedPhoto: UnsPlash | null;
}
const initialState: UnsplashState = {
  selectedPhoto: null,
};

const unsplashPage = createSlice({
  name: "unsplash",
  initialState,
  reducers: {
    setSelectedPhoto(state, action: PayloadAction<UnsPlash | null>) {
      state.selectedPhoto = action.payload;
    },
  },
});
export const { setSelectedPhoto } = unsplashPage.actions;
export default unsplashPage.reducer;
