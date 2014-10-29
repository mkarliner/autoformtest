Books = new Mongo.Collection("books");

var Schemas = {};

Schemas.Book = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    copies: {
        type: Number,
        label: "Number of copies",
        min: 0
    },
    lastCheckedOut: {
        type: Date,
        label: "Last date this book was checked out",
        optional: true
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    },
	fileId: {
	    type: String,
	    autoform: {
	      type: "cfs-file",
	      collection: "images"
	    }
	  }
});

Books.attachSchema(Schemas.Book);

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});