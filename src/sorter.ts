import { SortAlgorithm } from "./sort";

/**
 * Sorter uses algorithms to sort arrays.
 */
export default class Sorter {
  /**
   * constructor creates a new sorter with the given algorithm.
   * @param algorithm Algorithm to sort with.
   */
  constructor(private algorithm: SortAlgorithm) {}

  /**
   * sort sorts the array provided in-place using the algorithm provided.
   * @param l List of numbers to sort.
   */
  sort(list: number[]): void {
    this.algorithm.sort(list)
  }
}
