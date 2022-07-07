const { BufWrapper } = require('@minecraft-js/bufwrapper');
const plugin = require('../dist/plugin');
const { assert } = require('chai');

describe('Unsigned Byte', () => {
  it('Write', () => {
    const buf = new BufWrapper(null, {
      plugins: { plugin },
    });
    buf.plugins.plugin.writeUByte(128);
    assert.equal(buf.buffer.toString('hex'), '80');
  });

  it('Read', () => {
    const buf = new BufWrapper(Buffer.from([0x80]), {
      plugins: { plugin },
    });
    assert.equal(buf.plugins.plugin.readUByte(), 128);
  });
});
