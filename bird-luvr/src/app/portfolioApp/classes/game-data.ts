import { LinkData } from "./link-data";

export class GameData {
    name:string = "";
    path:string = "";
    preview_img:string = "";
    timeframe:string = "";
    tagline:string = "";
    content:string = "";
    links:LinkData[] = [];

    get preview_img_url():string {
        return `/game_images/${this.preview_img}`;
    }
}
