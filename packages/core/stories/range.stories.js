import React from "react";
import { storiesOf } from "@storybook/react";
import Range from "../components/Range";

storiesOf("Range", module).add("default", () => (
  <Range style={{ width: 100 }} />
));
