import { SortAlgorithm } from "./sort";

export default class Sorter {
  constructor(private algorithm: SortAlgorithm) {}

  sort(list: number[]): void {
    this.algorithm.sort(list)
  }
}
