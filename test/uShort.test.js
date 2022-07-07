const { BufWrapper } = require('@minecraft-js/bufwrapper');
const plugin = require('../dist/plugin');
const { assert } = require('chai');

describe('Unsigned Short', () => {
  it('Write', () => {
    const buf = new BufWrapper(null, {
      plugins: { plugin },
    });
    buf.plugins.plugin.writeUShort(1024);
    assert.equal(buf.buffer.toString('hex'), '0400');
  });

  it('Read', () => {
    const buf = new BufWrapper(Buffer.from([0x04, 0x00]), {
      plugins: { plugin },
    });
    assert.equal(buf.plugins.plugin.readUShort(), 1024);
  });
});
