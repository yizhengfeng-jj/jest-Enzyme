describe("test", () => {
  it("arr contains item", () => {
    const expected = [
      expect.stringMatching(/^Alic/),
      expect.stringMatching(/^[BR]ob/)
    ];

    expect(["Alicia", "Roberto", "Evelina"]).toEqual(
      expect.arrayContaining(expected)
    );
  });

  it("1 + 1 = 2", () => {
      expect(1 + 1).toBe(2)
  })

  it('object is Equal object', () => {
      const obj = {name: "json"};
      obj['age'] = 21;

      expect(obj).toEqual({name:"json", age:21})
  });

  it('2 + 2 is not equal 3', () => {
      expect(2 + 2).not.toEqual(3)
  })
});

describe('test truthy or falsy', () => {
    it('1 is true', () => {
        expect(1).toBeTruthy();
    });

    it('0 is falsy', () => {
        expect(0).toBeFalsy();
    })
})