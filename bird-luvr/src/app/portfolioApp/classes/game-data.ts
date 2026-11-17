import { LinkData } from "./link-data";

export class GameData {
    name:string = "";
    path:string = "";
    preview_img:string = "";
    timeframe:string = "";
    tagline:string = "";
    content:string = "";
    links:LinkData[] = [];

    get previewImgUrl():string {
        return `/game_images/${this.preview_img}`;
    }
}
