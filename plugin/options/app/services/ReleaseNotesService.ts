
import {IReleaseNote, releaseNotes} from "../../../core/scripts/ReleaseNotes";

export interface ReleaseNotesService {
    data: Array<IReleaseNote>;
}

export let ReleaseNotesService = () => {
    let releaseNotesService: ReleaseNotesService = {
        data: releaseNotes
    };
    return releaseNotesService;
};

