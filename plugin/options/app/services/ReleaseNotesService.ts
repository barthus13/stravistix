import {app} from "../App";
import {IReleaseNote, releaseNotes} from "../../../core/scripts/ReleaseNotes";

export interface ReleaseNotesService {
    data: Array<IReleaseNote>;
}

app.factory('ReleaseNotesService', () => {
    let releaseNotesService: ReleaseNotesService = {
        data: releaseNotes
    };
    return releaseNotesService;
});
