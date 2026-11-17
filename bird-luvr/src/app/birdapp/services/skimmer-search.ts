import { Service } from '@angular/core';
import { ObservationData } from '../classes/observation-data';
import { ObservationSearchResults } from '../classes/observation-search-results';
import moment from 'moment';

@Service()
export class SkimmerSearch {
    link_url:string = "https://www.inaturalist.org/";
    base_url:string = "https://api.inaturalist.org/v2/";
    observations_url="observations/?";
    taxon_id_skimmer = "&taxon_id=4496";
    taxon_id_peregrine = "&taxon_id=4647";
    taxon_id_grebe = "&taxon_id=4235";
    taxon_id_murre = "&taxon_id=4519";
    location="lat=34.14703157579675&lng=-117.3162604134375&radius=231.45630820637606";
    date_start="d1=";
    photos = "photos=true";
    orderby_created = "order=desc&order_by=created_at";
    orderby_votes = "order=desc&order_by=votes";
    fields_squarePhoto="fields=(total_results:!t,uri:!t,species_guess:!t,observed_on:!t,time_observed_at:!t,photos:(id:!t,url:!t,square_url:!t),user:(id:!t,name:!t),place_guess:!t,geojson:(coordinates:!t,type:!t))";
    fields_largePhoto="fields=(total_results:!t,uri:!t,species_guess:!t,observed_on:!t,time_observed_at:!t,photos:(id:!t,url:!t,original_url:!t),user:(id:!t,name:!t),place_guess:!t)";

    oneMonthAgo = moment().subtract(31, 'days');
    oneYearAgo = moment().subtract(1, 'year');
    recent_socal_search_query = this.observations_url + this.date_start + this.oneMonthAgo.format('YYYY-MM-DD') + "&" + this.location + "&" + this.orderby_created + "&" + this.fields_squarePhoto;
    all_popular_photos_search_query = this.observations_url + this.date_start + this.oneMonthAgo.format('YYYY-MM-DD') + "&" + this.photos + "&" + this.orderby_votes + "&" + this.fields_largePhoto;

    sendRequest (query:string) {
        return fetch(this.base_url + query).then((response) => {
            return response;
        }, (error:any) => {
            return error;
        });
    }

    getBirdName(birdType:string):string {
        let name:string = "";
        switch(birdType) {
            case "skimmer" : name = "black skimmer"; break;
            case "peregrine" : name = "peregrine falcon"; break;
            case "grebe" : name = "western grebe"; break;
            case "murre" : name = "common murre"; break;
        }
        return name;
    }

    getAllRecentSightings(birdType:string):Promise<ObservationSearchResults> {
        let taxonid = this.getTaxonId(birdType);

        let recentObservations:ObservationSearchResults = new ObservationSearchResults();
        return this.sendRequest(this.recent_socal_search_query + taxonid).then((response) => {
            return response.json().then((results_json:any) => {
                results_json.results.forEach((obsv:any) => {
                    recentObservations.results.push(this.createObservationData(obsv));
                });
                recentObservations.total_results = results_json.total_results;
                return recentObservations;
            });
        });
    }

    getRecentPopularPhotos(birdType:string):Promise<ObservationSearchResults> {
        let taxonid = this.getTaxonId(birdType);

        let recentObservations:ObservationSearchResults = new ObservationSearchResults();
        return this.sendRequest(this.all_popular_photos_search_query + taxonid).then((response) => {
            return response.json().then((results_json:any) => {
                results_json.results.forEach((obsv:any) => {
                    recentObservations.results.push(this.createObservationData(obsv));
                });
                recentObservations.total_results = results_json.total_results;
                return recentObservations;
            });
        });
    }

    private getTaxonId(birdType:string):string {
        let taxonid:string = "";
        switch(birdType) {
            case "skimmer" : taxonid = this.taxon_id_skimmer; break;
            case "peregrine" : taxonid = this.taxon_id_peregrine; break;
            case "grebe" : taxonid = this.taxon_id_grebe; break;
            case "murre" : taxonid = this.taxon_id_murre; break;
        }
        return taxonid;
    }

    private createObservationData (obsv:any):ObservationData {
        let data = new ObservationData();
        data.species_guess = obsv.species_guess;
        data.post_url = obsv.uri;

        if(obsv.user != null && data.user_name != null) {
            data.user_name = obsv.user.name;
        } else {
            data.user_name = "Unknown";
        }

        if(obsv.place_guess != null && obsv.place_guess != "")
        {
            data.location = obsv.place_guess;
            data.location = data.location.substring(0, data.location.indexOf(',', data.location.indexOf(',')+1));
        }
        else 
        {
            data.location = "unknown";
        }

        if(obsv.geojson != null && obsv.geojson.coordinates != null) {
            data.lat = obsv.geojson.coordinates[1];
            data.long = obsv.geojson.coordinates[0];
        }

        if(obsv.observed_on != null)
        {
            data.dateTime_moment = moment(obsv.observed_on);
            let time = moment(obsv.time_observed_at);
            data.dateTime_moment.set('hour', time.get('hour'));
            data.dateTime_moment.set('minute', time.get('minute'));
        }

        if(obsv.photos != null)
        {
            obsv.photos.forEach((photo:any) => {
                data.image_url = photo.url;
            });
        }

        //console.log(data);
        return data;
    }

    recentSkimmersINatLinkURL (birdType:string) {
        return this.link_url + this.recent_socal_search_query + this.getTaxonId(birdType);
    }

    recentPhotosINatLinkURL (birdType:string) {
        return this.link_url + this.all_popular_photos_search_query + this.getTaxonId(birdType);
    }
}
