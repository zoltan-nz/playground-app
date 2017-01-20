import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const loggerStub = Ember.Service.extend({
  logStack: ['asdf'],

  clear() {
    this.set('logStack', []);
  }
});

moduleForComponent('logger-stack', 'Integration | Component | logger stack', {
  integration: true,

  beforeEach: function () {
    this.register('service:logger', loggerStub);
    this.inject.service('logger', { as: 'logger' });
  }
});


test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{logger-stack}}`);

  assert.deepEqual(this.$('p').text().trim(), `Items in log: 1`);

});

test('it clear stack', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{logger-stack}}`);

  this.$('.clear').click();

});
