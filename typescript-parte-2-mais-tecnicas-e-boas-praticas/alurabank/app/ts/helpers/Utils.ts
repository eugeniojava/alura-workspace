import { Printable } from "../models/Printable";

export function print(...negotiations: Printable[]) {
  negotiations.forEach((object) => object.toString());
}
