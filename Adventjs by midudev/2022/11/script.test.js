import getCompleted from "./script";



describe("challenge examples", () => {
  test("getCompleted should return the proper time", () => {
    const testData = [
      {
        input: ["01:00:00", "03:00:00"],
        expected: "1/3",
      },
      {
        input: ["02:00:00", "04:00:00"],
        expected: "1/2",
      },
      {
        input: ["01:00:00", "01:00:00"],
        expected: "1/1",
      },
      {
        input: ["00:10:00", "01:00:00"],
        expected: "1/6",
      },
      {
        input: ["01:10:10", "03:30:30"],
        expected: "1/3",
      },
      {
        input: ["03:30:30", "05:50:50"],
        expected: "3/5",
      },
    ];
    testData.forEach((data) => {
      expect(getCompleted(data.input[0], data.input[1])).toBe(data.expected);
    });
  });
});
