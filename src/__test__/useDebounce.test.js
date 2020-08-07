import React, { useEffect } from "react";
import { render } from "@testing-library/react";
import useDebounce from "../useDebounce";

import axios from "../__mock__/axios";

const TestFC = () => {
  const debouncedInput = useDebounce("searchtext", 2000);
  useEffect(() => {
    axios.get(`/url-can-be-get-post-or-put`);
  }, [debouncedInput]);

  return <h1>Test Hooks Component</h1>;
};

describe("How debounce hooks works", () => {
  it("executes the hooks", () => {
    render(<TestFC />);
    expect(axios.get).toHaveBeenCalled();
  });
});
