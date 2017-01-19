import { moduleFor, test } from 'ember-qunit';

moduleFor('service:logger', 'Unit | Service | logger', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it add message to the stack', function(assert) {
  assert.expect(2);

  let service = this.subject();
  assert.equal(service.logStack.length, 0);

  service.add('Test message');
  assert.equal(service.logStack.length, 1);
});
