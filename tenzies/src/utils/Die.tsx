import { nanoid } from "nanoid";

export default class Die {
  value: number;
  isHeld: boolean;
  readonly id: string;

  constructor(value: number, isHeld: boolean = false) {
    this.value = value;
    this.isHeld = isHeld;
    this.id = nanoid();
  }

  toogleHeld() {
    this.isHeld = !this.isHeld;
  }

  setValue(value: number) {
    this.value = value;
  }

}