const Block  = require('./block');

const fooBlcok = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlcok.toString())