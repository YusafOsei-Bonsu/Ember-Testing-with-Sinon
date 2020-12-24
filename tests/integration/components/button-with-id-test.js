import sinon from 'sinon';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('button-with-id', 'Integration | Component | button with id', {
  integration: false
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{button-with-id}}`);

  assert.equal(this.$().text().trim(), '', "button-with-id can render");
});

test("it sends its id when the button is pressed", function(assert) {
  let component = this.subject();
  let buttonId = '7';
  component.set('id', buttonId);
 
  component.sendAction = sinon.spy();
 
  component.send('buttonPressed');
 
  assert.ok(component.sendAction.calledOnce, "sendAction was called once");
  assert.ok(component.sendAction.calledWith('sendId', buttonId), "sendAction was called with 'sendId' & the button's ID");
});
