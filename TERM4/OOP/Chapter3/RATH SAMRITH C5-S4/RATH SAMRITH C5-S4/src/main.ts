
import { Canvoy } from "./canvoy";
import { MiniVan } from "./minivan";
import { TucTuc } from "./tuctuc";
import { Batmobile } from "./batmobile";

const minivan = new MiniVan("LVT4EVER", 20, 15, 3);
const tucTuc = new TucTuc("TucTuc", 10, 10);
const batmobile = new Batmobile("Batmobile", 100, 100, true);
const vehicles = [minivan, tucTuc, batmobile];
const canvoy = new Canvoy(vehicles);

// console.log(JSON.stringify(canvoy));
console.log("speed :",canvoy.getMaxSpeed());
