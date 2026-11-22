import { LinkData } from "./link-data";

export class GameData {
    name:string = "";
    path:string = "";
    category:string = "";
    preview_img:string = "";
    images:string[] = [];
    timeframe:string = "";
    tagline:string = "";
    content:string = "";
    links:LinkData[] = [];
}
