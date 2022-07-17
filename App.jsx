import React from "React";
import test from "./assets/test.png"
import * as client from "react-dom/client";

const Hello = () => <h1>Hello world! <img src={test} alt=""/></h1>;
const root = client.createRoot(document.getElementById("root"));
root.render(<Hello />);
