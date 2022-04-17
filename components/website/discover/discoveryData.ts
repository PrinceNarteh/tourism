import Kakum from "assets/images/kakum-small.jpg";
import CapeCoastCastle from "assets/images/cape-coast-castle-sm.jpg";
import BotiFalls from "assets/images/boti-falls-sm.jpg";
import LarabangaMosque from "assets/images/larabanga-mosque-sm.jpg";
import ElminaCastle from "assets/images/elmina-castle-sm.jpg";

interface IDiscoveries {
  title: string;
  location: string;
  image: StaticImageData;
}

export const discoveries: IDiscoveries[] = [
  {
    title: "Boti Falls",
    location: "Boti",
    image: BotiFalls,
  },
  {
    title: "Cape Coast Castle",
    location: "Cape Coast",
    image: CapeCoastCastle,
  },
  {
    title: "Kakum National Park",
    location: "Cape Coast",
    image: Kakum,
  },
  {
    title: "Larabanga Mosque",
    location: "Larabanga",
    image: LarabangaMosque,
  },
  {
    title: "Elmina Castle",
    location: "Elmina",
    image: ElminaCastle,
  },
];
