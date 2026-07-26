import type { Plant } from "@/types/plant";

import basil from "./basil";
import beet from "./beet";
import bellPepper from "./bell-pepper";
import blueberry from "./blueberry";
import broccoli from "./broccoli";
import brusselsSprouts from "./brussels-sprouts";
import carrot from "./carrot";
import cauliflower from "./cauliflower";
import collardGreens from "./collard-greens";
import cucumber from "./cucumber";
import eggplant from "./eggplant";
import garlic from "./garlic";
import greenBean from "./green-bean";
import kale from "./kale";
import lettuce from "./lettuce";
import marigold from "./marigold";
import mint from "./mint";
import onion from "./onion";
import potato from "./potato";
import pumpkin from "./pumpkin";
import radish from "./radish";
import rosemary from "./rosemary";
import spinach from "./spinach";
import strawberry from "./strawberry";
import sunflower from "./sunflower";
import swissChard from "./swiss-chard";
import tomato from "./tomato";
import turnip from "./turnip";
import zucchini from "./zucchini";

/**
 * The full plant repository. To contribute a new plant, add a file in this
 * directory following the `Plant` shape (see src/types/plant.ts) and list it
 * here. See CONTRIBUTING.md for details.
 */
export const plants: Plant[] = [
  basil,
  beet,
  bellPepper,
  blueberry,
  broccoli,
  brusselsSprouts,
  carrot,
  cauliflower,
  collardGreens,
  cucumber,
  eggplant,
  garlic,
  greenBean,
  kale,
  lettuce,
  marigold,
  mint,
  onion,
  potato,
  pumpkin,
  radish,
  rosemary,
  spinach,
  strawberry,
  sunflower,
  swissChard,
  tomato,
  turnip,
  zucchini,
];

export const plantsById: Record<string, Plant> = Object.fromEntries(
  plants.map((plant) => [plant.id, plant]),
);

export function getPlantById(id: string): Plant | undefined {
  return plantsById[id];
}
