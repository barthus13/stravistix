import {app} from "../App";

app.filter('hrrToBpmFilter', () => {
    return (hrr: string, maxHr: string, restHr: string) => {
        return (parseFloat(hrr) / 100 * (parseInt(maxHr) - parseInt(restHr)) + parseInt(restHr)).toFixed(0);
    };
});