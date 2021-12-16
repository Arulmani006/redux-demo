import { compose, pipe } from "lodash/fp"; 

let input = "  f ";
let output = "<div>" + input.trim() + "<div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const wrap = (type, str) => `<span>${str}</span>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

const transforms = pipe(trim, toLowerCase, wrapInDiv);
transforms(input)