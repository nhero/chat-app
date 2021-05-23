import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Message from "./Message";

describe("<Message />", () => {
  test("it should mount", () => {
    render(
      <Message
        key={0}
        message={"test message"}
        to={2}
        from={1}
        date={"05-22-2021 12:11"}
        currentUser={1}
      />
    );

    const message = screen.getByTestId("Message");

    expect(message).toBeInTheDocument();
  });
});
