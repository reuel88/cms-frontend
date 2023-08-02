import { render, screen } from "@testing-library/react";
import Home from "@/app/[locale]/(page)/(routes)/page";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../messages/en.json";

jest.mock("next-intl/client", () => {
  return {
    usePathname: () => "/",
    useRouter: jest.fn(),
  };
});

describe("Home", () => {
  it("renders correctly", () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Home />
      </NextIntlClientProvider>,
    );

    const heading = screen.getByText(/Get started by editing/i);

    expect(heading).toBeInTheDocument();
  });

  it("renders homepage unchanged", () => {
    const { container } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Home />
      </NextIntlClientProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
