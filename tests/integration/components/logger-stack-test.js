import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('logger-stack', 'Integration | Component | logger stack', {
  integration: true,
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{logger-stack}}`);

  assert.deepEqual(this.$('p').text().trim(), `Items in log:`);

});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('list', ['hello']);

  this.render(hbs`{{logger-stack logs=list}}`);

  assert.deepEqual(this.$('p').text().trim(), `Items in log: 1`);

});
