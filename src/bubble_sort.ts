import { SortAlgorithm } from "./sort"

/**
 * BubbleSort represents a sorter using Bubble Sort Algorithm
 */
export default class BubbleSort implements SortAlgorithm {
  /**
   * sort sorts the array provided in-place using the bubble sort algorithm.
   * @param l List of numbers to sort.
   */
  sort(list: number[]): void {
    for (let isSorted = false; !isSorted;) {
      isSorted = true
      for (let i = 0; i < list.length - 1; i++) {
        if (list[i] <= list[i+1]) {
          continue
        }
        const tmp = list[i]
        list[i] = list[i+1]
        list[i+1] = tmp
        isSorted = false
      }
    }
  }
}
