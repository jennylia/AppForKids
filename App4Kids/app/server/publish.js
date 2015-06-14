/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('assessment', function (/* args */) {
  return Assessment.find();
});