import Controller from '@ember/controller';
import { A } from '@ember/array'; 

export default Controller.extend({
    buttonGroups: A([
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['*', '0', '#'],
    ]),
    currentNumber: '',
    // Erases the current phone number
    clearNumber: function() {
        this.set('currentNumber', '');
    },
    dialNumber: function() {
        // Dial the number
        this.clearNumber();
    },
    actions: {
        receiveButtonPress: function(buttonId) {
            this.set('currentNumber', this.get('currentNumber') + buttonId);

            // If the number is valid, dial the number
            if (this.get('currentNumber').length === 10) this.dialNumber();
        }
    }
});
