import { expect } from "chai"
import BubbleSort from "../src/bubble_sort"
import MergeSort from "../src/merge_sort"
import Sorter from "../src/sorter"

describe("Sorter", () => {
  it("Test sort()", () => {
    const ms = new Sorter(new MergeSort())
    const bs = new Sorter(new BubbleSort())

    let list = [-5, -8, 10, -1, 2, -10, 1, 5, 6]
    bs.sort(list)
    expect(list).to.deep.equal([-10, -8, -5, -1, 1, 2, 5, 6, 10])

    list = [-5, -8, 10, -1, 2, -10, 1, 5, 6]
    ms.sort(list)
    expect(list).to.deep.equal([-10, -8, -5, -1, 1, 2, 5, 6, 10])
  })
})
