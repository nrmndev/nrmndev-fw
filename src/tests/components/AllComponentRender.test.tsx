import { render, screen } from "@testing-library/react";
import {
  Button,
  Card,
  CardContent,
  Column,
  Container,
  Row,
  Typography,
} from "@uiComponents";

const components = {
  Button: { component: Button, props: { "data-testid": "Button" } },
  Card: { component: Card, props: { "data-testid": "Card" } },
  CardContent: {
    component: CardContent,
    props: { "data-testid": "CardContent" },
  },
  Column: { component: Column, props: { "data-testid": "Column" } },
  Container: { component: Container, props: { "data-testid": "Container" } },
  //   List: { component: List, props: { "data-testid": "List" } },
  //   LabelDecoration: {
  //     component: LabelDecoration,
  //     props: { "data-testid": "List" },
  //   },
  Row: { component: Row, props: { "data-testid": "Row" } },
  Typography: { component: Typography, props: { "data-testid": "Typography" } },
};
describe("All components render without crashing", () => {
  Object.entries(components).forEach(
    ([name, { component: Component, props }]) => {
      test(`${name} renders in the document`, () => {
        render(<Component {...props} />);
        expect(screen.getByTestId(name)).toBeInTheDocument();
      });
    }
  );
});
