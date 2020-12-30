import React from "react";
import { render } from "react-dom";

import data from "./data/recipes.json";
import App from "./App";
render(<App recipes={data} />, document.getElementById("root"));
