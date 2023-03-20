/**
 * SortAlgorithm is the strategy all sort algoritms implement.
 */
export interface SortAlgorithm {
  /**
   * sort sorts the array provided in-place using the algorithm.
   * @param l List of numbers to sort.
   */
  sort(l: number[]): void
}
