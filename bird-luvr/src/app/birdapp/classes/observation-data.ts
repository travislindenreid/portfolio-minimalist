import moment, { Moment } from "moment";

export class ObservationData {
    species_guess:string = "";
    image_url:string = "";
    post_url:string = "";
    user_name:string = "";
    dateTime_moment:Moment = moment();
    location:string = "";
    lat:number = 0;
    long:number = 0;

    get date_formatted():string
    {
        return this.dateTime_moment.format("dddd, MMMM Do");
    }

    get time_formatted ():string
    {
        return this.dateTime_moment.format("[at] h:mm a");
    }

    get image_large ():string
    {
        return this.image_url.replace("square.jpg", "large.jpg");
    }
}
