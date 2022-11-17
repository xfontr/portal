import { render, screen } from "@testing-library/react";
import { Suspense } from "react";
import { MemoryRouter } from "react-router-dom";
import paths from "../../routes/paths";
import routes from "../../routes/routes";
import UiContextProvider from "../../store/UiContextProvider";
import LoadRoutes from "./LoadRoutes";

describe("Given a LoadRoutes component", () => {
  describe("When instantiated with a schema of routes", () => {
    test("Then it should render the christmas page if the path is '/'", async () => {
      render(
        <UiContextProvider>
          <MemoryRouter initialEntries={[paths.root]}>
            <Suspense>
              <LoadRoutes routes={routes} />
            </Suspense>
          </MemoryRouter>
        </UiContextProvider>
      );

      const christmasPage = await screen.findByRole("heading", {
        name: routes[1].heading!.title,
        level: 1,
      });

      expect(christmasPage).toBeInTheDocument();
    });

    test("Then it should render the christmas page if the path is '/christmas'", async () => {
      render(
        <UiContextProvider>
          <MemoryRouter initialEntries={[paths.joinList]}>
            <Suspense>
              <LoadRoutes routes={routes} />
            </Suspense>
          </MemoryRouter>
        </UiContextProvider>
      );

      const christmasPage = await screen.findByRole("heading", {
        name: routes[1].heading!.title,
        level: 1,
      });

      expect(christmasPage).toBeInTheDocument();
    });

    test("Then it should render the not found heading if the route is '/false-route'", async () => {
      const falseRoute = "/false-route";

      render(
        <UiContextProvider>
          <MemoryRouter initialEntries={[falseRoute]}>
            <Suspense>
              <LoadRoutes routes={routes} />
            </Suspense>
          </MemoryRouter>
        </UiContextProvider>
      );

      const notFoundPage = await screen.findByRole("heading", {
        name: routes[2].heading!.title,
        level: 1,
      });

      expect(notFoundPage).toBeInTheDocument();
    });
  });
});
