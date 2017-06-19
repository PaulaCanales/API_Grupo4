var mongoose = require('mongoose');

var AntenaSchema = new mongoose.Schema({
  hora: String,
  numa: String,
  lat: Number,
  lon: Number,
  torre: String,
});
module.exports = mongoose.model('pings', AntenaSchema);

/*
{ "hora" : "001128", "numa" : "00200ab7f577ca2b335241d2cdd8a1ac", "lat" : -33.05011111, "lon" : -71.3283611111, "torre" : "RVALF" }

var blogSchema = new mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});



{
	"_id" : ObjectId("591c6dd14cd3cf0cc51f0881"),
	"numa" : "418075d78b1c517b32accdd4a21b484a",
	"path" : [
		{
			"hora" : "224559",
			"lat" : -39.824879,
			"lon" : -73.230804,
			"torre" : "VLDC2"
		}
	]
}
{
	"_id" : ObjectId("591c6dd14cd3cf0cc51f0882"),
	"numa" : "ee9303f988e6f1c74fde75bcc1897e2a",
	"path" : [
		{
			"hora" : "003508",
			"lat" : -39.8314847,
			"lon" : -73.2425697,
			"torre" : "7COMF"
		},
		{
			"hora" : "172423",
			"lat" : -39.82506,
			"lon" : -73.20667,
			"torre" : "GILCF"
		}
	]
}

*/
