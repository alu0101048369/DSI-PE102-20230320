import { expect } from "chai"
import MergeSort from "../src/merge_sort"

describe("MergeSort", () => {
  it("Test sort()", () => {
    const bs = new MergeSort()

    let list: number[] = []
    bs.sort(list)
    expect(list).to.deep.equal([])

    list = [-5, -8, 10, -1, 2, -10, 1, 5]
    bs.sort(list)
    expect(list).to.deep.equal([-10, -8, -5, -1, 1, 2, 5, 10])

    list = [-5, -8, 10, -1, 2, -10, 1, 5, 6]
    bs.sort(list)
    expect(list).to.deep.equal([-10, -8, -5, -1, 1, 2, 5, 6, 10])
  })
})
