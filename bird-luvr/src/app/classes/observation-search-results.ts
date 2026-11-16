import { ObservationData } from "./observation-data"

export class ObservationSearchResults {
    results:ObservationData[] = [];
    total_results:number = 0; // may be more than single cached page
}
