import { Printable } from "./Printable";
import { Comparable } from "./Comparable";

export interface MyObject<T> extends Printable, Comparable<T> {}
