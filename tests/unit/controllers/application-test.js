import sinon from 'sinon';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});
 
// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller, "The controller exists");
});

test("Controller makes a call when it has received 11 digits", function(assert) {
  let controller = this.subject();
  controller.dialNumber = sinon.spy();
  controller.set('currentNumber', '1555867530');

  controller.send('receiveButtonPress', '9');
  assert.ok(controller.dialNumber.calledOnce);
});
