import {Helper} from "./scripts/Helper";
import {VacuumProcessor} from "./scripts/processors/VacuumProcessor";

console.log("Main execute");
let r = Helper.secondsToHHMMSS(60);
console.log(r);

let va: VacuumProcessor = new VacuumProcessor();
console.log(va.getCurrentAthlete());
// var stravistiX = new StravistiX(null, null);