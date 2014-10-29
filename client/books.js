Template.books.helpers({
	booklist: function() {
		return Books.find({});
	},
	image: function(fileId) {
		console.log("Trying to find image");
		image = Images.findOne({_id: fileId});
		if (typeof image != 'undefined') {
			console.log("Image is ", image);
			return 	image.url();	
		}
		
	}
});
