import { SpinnerDotted } from "spinners-react";
import "./spinner.scss";
// Spinner update 000
export default function SpinnerItem() {
  return (
    <div className="spinner">
      <SpinnerDotted color="#f5a524" />
    </div>
  );
}
