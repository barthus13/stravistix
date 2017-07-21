import {app} from "../App";

export interface ReleaseNotesService {
    data: Array<IReleaseNote>;
}

app.factory('ReleaseNotesService', () => {
    let releaseNotesService: ReleaseNotesService = {
        data: releaseNotes
    };
    return releaseNotesService;
});
