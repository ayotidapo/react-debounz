import useDebounce from "../useDebounce";
describe("How debounce hooks works", () => {
  const funcObj = {
    useDebounce: jest.fn(),
  };

  const useDebounceSpy = jest.spyOn(funcObj, "useDebounce");
  it("executes the hooks", () => {
    const debouncedInput = useDebounce("searchtext", 2000);

    expect(useDebounceSpy).toHaveBeenCalled();
    expect(debouncedInput).toBeTruthy();
  });
});
