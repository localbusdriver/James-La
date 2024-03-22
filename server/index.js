require('ignore-styles');
require('dotenv').config();
require('@babel/register')({
  ignore: [/(node_module)/],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
});

require('./server');