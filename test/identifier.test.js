const { BufWrapper } = require('@minecraft-js/bufwrapper');
const plugin = require('../dist/plugin');
const { assert } = require('chai');

describe('Identifier', () => {
  it('Write', () => {
    const buf = new BufWrapper(null, {
      plugins: { plugin },
    });
    buf.plugins.plugin.writeIdentifier('minecraft', 'brand');
    assert.equal(
      buf.buffer.toString('hex'),
      '0f6d696e6563726166743a6272616e64'
    );
  });

  it('Read', () => {
    const buf = new BufWrapper(
      Buffer.from('0f6d696e6563726166743a6272616e64', 'hex'),
      {
        plugins: { plugin },
      }
    );
    const identifier = buf.plugins.plugin.readIdentifier();
    assert.equal(identifier.namespace, 'minecraft');
    assert.equal(identifier.value, 'brand');
  });
});
