var StateSchema={
    _id:{type:Number},
    name:{type:String}
}
var CitySchema={
    stateid:{type:Number},
    name:{type:String}
}
var StudSchema={
    name:{
        type:String,
            require:true
    },
    age:{
        type:Number,
            require:true
    },
    password:{
        type:String,
            require:true
    },
    state:{
        type:String,
            require:true
    },
    city:{
        type:String,
            require:true
    },
    email:{
        type:String,
            require:true,
            validate:{
            validator:validator.isEmail,
                message:'{VALUE} is not email'
        }
    },
    contact:{
        type:Number,
            require:true
    },
    hobby:{
        type:String,
            require:true
    },
    gender:{
        type:String,
            require:true
    },
    photo:{
        type:String,
            require:true
    },
    dob:{
        type:Date,
            require:true
    },
    flag:{
        type:Number,
            require:true
    },
    tokens:[{
        access:{
            type:String,
            require:true
        },
        token:{
            type:String,
            require:true
        }
    }]
}
var state=mongoose.model('state',StateSchema)
var city=mongoose.model('city',CitySchema)
var stud=mongoose.model('test',StudSchema)
module.exports={state,city,stud}