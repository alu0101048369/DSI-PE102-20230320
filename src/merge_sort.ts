import { SortAlgorithm } from "./sort"

export default class MergeSort implements SortAlgorithm {
  sort(list: number[]): void {
    // Sort bottom level
    for (let i = 0; i < list.length; i += 2) {
      if (i === list.length - 1 || list[i] <= list[i+1]) {
        continue
      }
      const tmp = list[i]
      list[i] = list[i+1]
      list[i+1] = tmp
    }

    // Merge
    for (let i = 4; i < list.length*2; i = i << 1) {
      this.merge(list, i)
    }
  }

  private merge(list: number[], size: number): void {
    for (let i = 0; i < list.length; i += size) {
      const midPoint = i + Math.trunc(size / 2)
      let a = i
      let b = midPoint

      const result = [] as number[]
      while (a !== midPoint || b !== i+size) {
        if (a === midPoint) {
          if (b < list.length) {
            result.push(list[b])
          }
          b++
          continue
        }
        if (b === i + size || list[a] <= list[b]) {
          if (a < list.length) {
            result.push(list[a])
          }
          a++
          continue
        }
        if (b < list.length) {
          result.push(list[b])
        }
        b++
      }

      result.forEach((val, j) => list[i+j] = val)
    }
  }
}
