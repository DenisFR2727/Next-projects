import { TfiViewList } from "react-icons/tfi";
import { PiBoundingBoxLight } from "react-icons/pi";

export default function dinamicPanelMenu() {
  return (
    <div className="dinamic-panel-menu">
      <div className="card-panel">
        <PiBoundingBoxLight className="list-panel-boxlight" />
      </div>
      <div className="list-panel">
        <TfiViewList className="list-panel-listview" />
      </div>
    </div>
  );
}
