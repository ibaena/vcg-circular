

Meteor.methods({
  addProduct(item) {
    console.log('hello');
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

});
