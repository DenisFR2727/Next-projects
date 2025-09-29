import { RootState } from "../store";

export const selectedPhotoSelector = (state: RootState) =>
  state.unsplashPage.selectedPhoto;
