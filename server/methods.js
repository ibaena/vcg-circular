Meteor.methods({
  addProduct(item) {
    Products.insert({
      name: item.name,
      description: item.description,
      price: item.price,
      suffix: item.suffix,
      featured: item.featured,
      image: item.image,
      createdAt: new Date(),
    });
  },
  showProducts(){
    Products.find().fetch();
  },
});
Meteor.publish("products", function () {
    return Products.find({}).fetch();
});
