import type { Plant } from "@/types/plant";

import basil from "./basil";
import bellPepper from "./bell-pepper";
import blueberry from "./blueberry";
import broccoli from "./broccoli";
import carrot from "./carrot";
import cucumber from "./cucumber";
import garlic from "./garlic";
import greenBean from "./green-bean";
import kale from "./kale";
import lettuce from "./lettuce";
import marigold from "./marigold";
import mint from "./mint";
import onion from "./onion";
import pumpkin from "./pumpkin";
import rosemary from "./rosemary";
import spinach from "./spinach";
import strawberry from "./strawberry";
import sunflower from "./sunflower";
import tomato from "./tomato";
import zucchini from "./zucchini";

/**
 * The full plant repository. To contribute a new plant, add a file in this
 * directory following the `Plant` shape (see src/types/plant.ts) and list it
 * here. See CONTRIBUTING.md for details.
 */
export const plants: Plant[] = [
  basil,
  bellPepper,
  blueberry,
  broccoli,
  carrot,
  cucumber,
  garlic,
  greenBean,
  kale,
  lettuce,
  marigold,
  mint,
  onion,
  pumpkin,
  rosemary,
  spinach,
  strawberry,
  sunflower,
  tomato,
  zucchini,
];

export const plantsById: Record<string, Plant> = Object.fromEntries(
  plants.map((plant) => [plant.id, plant]),
);

export function getPlantById(id: string): Plant | undefined {
  return plantsById[id];
}
