const toJSONCallback = require('../cjs');

const assert = (fn, expected) => {
  const clean = toJSONCallback(fn);
  if (clean !== expected)
    throw new Error(`expected: ${expected}\ngot: ${clean}`);
};

assert(
  async () => {},
  'async () => {}'
);
assert(
  async() => {},
  'async() => {}'
);
assert(
  () => {},
  '() => {}'
);
assert(
  async function () {},
  'async function () {}'
);
assert(
  function () {},
  'function () {}'
);
assert(
  async function() {},
  'async function() {}'
);
assert(
  function() {},
  'function() {}'
);
assert(
  { async f () {} }.f,
  'async function f () {}'
);
assert(
  { async f() {} }.f,
  'async function f() {}'
);
assert(
  { f () {} }.f,
  'function f () {}'
);
assert(
  { f() {} }.f,
  'function f() {}'
);
