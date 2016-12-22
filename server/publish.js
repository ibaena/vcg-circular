

Meteor.publish("AllProducts", function() {
  return Products.find();
});
