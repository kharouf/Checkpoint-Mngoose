const mongoose  =require('mongoose');

const schema = mongoose.Schema

const personschema = new schema({
   name:{
    type:String,
    require:true
   },
   age:{
    type:Number
   },
   favoriteFoods:{
    type:[String]
   } 

}
)

// const Person = mongoose.model('person',personschema)
// module.exports = Person

module.exports = Person = mongoose.model('person',personschema)