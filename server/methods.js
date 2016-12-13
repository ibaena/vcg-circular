Meteor.methods({
  addProduct(item) {
    Products.insert({
      name: item.name,
      description: item.description,
      price: item.price,
      featured: item.featured,
      image: item.image,
      createdAt: new Date(),
    });

  },
  toggleResolutions(resolution) {
    if(Meteor.userId() !== resolution.user){
      throw new Meteor.Error("Not authorized");
    }
    Resolutions.update(resolution._id, {
      $set: {
        complete: !resolution.complete
      }
    });
  },
  deleteResolution(resolution) {
    if(Meteor.userId() !== resolution.user){
      throw new Meteor.Error("Not authorized");
    }
    Resolutions.remove(resolution._id);
  },
});
