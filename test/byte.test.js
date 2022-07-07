const { BufWrapper } = require('@minecraft-js/bufwrapper');
const plugin = require('..');
const { assert } = require('chai');

describe('Byte', () => {
  it('Write', () => {
    const buf = new BufWrapper(null, {
      plugins: { plugin },
    });
    buf.plugins.plugin.writeByte(64);
    assert.equal(buf.buffer.toString('hex'), '40');
  });

  it('Read', () => {
    const buf = new BufWrapper(Buffer.from([0x40]), {
      plugins: { plugin },
    });
    assert.equal(buf.plugins.plugin.readByte(), 64);
  });
});
