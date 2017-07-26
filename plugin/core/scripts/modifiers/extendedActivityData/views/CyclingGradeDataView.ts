import * as _ from "underscore";
import {AbstractGradeDataView} from "./AbstractGradeDataView";
import {IGradeData} from "../../../interfaces/ActivityData";

export class CyclingGradeDataView extends AbstractGradeDataView {

    constructor(gradeData: IGradeData, units: string) {
        super(gradeData, units);
    }

    protected insertDataIntoGrid(): void {

        super.insertDataIntoGrid();

        let avgClimbingSpeed: number = (this.gradeData.upFlatDownMoveData.up * this.speedUnitsData.speedUnitFactor);
        let avgFlatSpeed: number = (this.gradeData.upFlatDownMoveData.flat * this.speedUnitsData.speedUnitFactor);
        let avgDownhillSpeed: number = (this.gradeData.upFlatDownMoveData.down * this.speedUnitsData.speedUnitFactor);

        this.insertContentAtGridPosition(0, 4, _.isNaN(avgClimbingSpeed) || avgClimbingSpeed.toString() == 'NaN' ? '-' : avgClimbingSpeed.toFixed(1), 'Avg climbing speed', this.speedUnitsData.speedUnitPerHour, 'displayAdvancedGradeData');
        this.insertContentAtGridPosition(1, 4, _.isNaN(avgFlatSpeed) || avgFlatSpeed.toString() == 'NaN' ? '-' : avgFlatSpeed.toFixed(1), 'Avg flat speed', this.speedUnitsData.speedUnitPerHour, 'displayAdvancedGradeData');
        this.insertContentAtGridPosition(2, 4, _.isNaN(avgDownhillSpeed) || avgDownhillSpeed.toString() == 'NaN' ? '-' : avgDownhillSpeed.toFixed(1), 'Avg downhill speed', this.speedUnitsData.speedUnitPerHour, 'displayAdvancedGradeData');
    }

}
