import { expect } from "chai"
import BubbleSort from "../src/bubble_sort"

describe("BubbleSort", () => {
  it("Test sort()", () => {
    const bs = new BubbleSort()

    let list: number[] = []
    bs.sort(list)
    expect(list).to.deep.equal([])

    list = [-5, -8, 10, -1, 2, -10, 1, 5, 6]
    bs.sort(list)
    expect(list).to.deep.equal([-10, -8, -5, -1, 1, 2, 5, 6, 10])
  })
})
