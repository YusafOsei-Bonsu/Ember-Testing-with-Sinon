import Component from '@ember/component';

export default Component.extend({
    actions: {
        buttonPressed: function() {
            this.sendAction('sendId', this.get('id'));
        }
    }
});
