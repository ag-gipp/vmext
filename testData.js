'use strict';

const glob = require('glob');
const fs = require('fs');
const getFileAsString = n => fs.readFileSync(n,'utf-8');
const mml = glob.sync('frontend/data/*.mml.xml', 'utf8')
  .map(getFileAsString);
const sim = glob.sync('frontend/data/*sim.json', 'utf8')
  .map(getFileAsString);
const locals = {
  'locals' : { mml, sim }
};
module.exports = locals;
