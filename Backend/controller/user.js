exports.insert=(req,res)=>{
    var samplefile=req.files.photo
    samplefile.mv(__dirname+'/upload/'+samplefile.name)
    var dt=new Date(req.body.dob)

    var newstud=new stud(req.body)
    newstud.password=bcrypt.hashSync(req.body.password,10)
    newstud.flag=1
    newstud.photo=samplefile.name
    newstud.dob=dt
    newstudsave().then(()=>{
        var access='auth'
        var token=jwt.sign({_id:newstud._id},'abc123').toString()
        newstud.tokens.push({access,token})
        return newstud.save().then((token)=>
        {return token})
    }).then((token)=>{
        console.log(newstud)
        res.send(token)
    }).catch((err)=>{
        res.send(err)
    })
}
exports.update= (req,res)=> {
    var dt = new Date(req.body.dob)
    stud.findById(req.body.id).then((p) => {
        p.name = req.body.name
        p.password = bcrypt.hashSync(req.body.password, 10)
        p.age = req.body.age
        p.state = req.body.state
        p.city = req.body.city
        p.email = req.body.email
        p.contact = req.body.contact
        p.hobby = req.body.hobby
        p.gender = req.body.gender
        p.dob = dt
        if (req.files != null) {
            var samplefile = req.files.photo
            samplefile.mv(__dirname + '/upload/' + samplefile.name)
            p.photo = samplefile.name
        }
        p.save().then((info) => {
            console.log(info)
            res.send(info)
        }).catch((err) => {
            res.send(err)
        })
    }).catch((err) => {
        res.send(err)
    })
}
exports.deleteData=(req,res)=> {
    stud.findById(req.params.id).then((p) => {
        p.flag = 0
        p.save().then((info) => {
            console.log(info)
            res.send(info)
        }).catch((err) => {
            res.send(err)
        })
    }).catch((err) => {
        res.send(err)
    })
}
exports.fetchData=(req,res)=>{
    stud.find({flag:1}).sort({_id:-1}).then((info)=>{
        res.send(info)
    }).catch((err)=>{
        res.send(err)
    })
}
exports.stateData=(req,res)=>{
    state.find().then((info)=>{
        res.send(info)
    }).catch((err)=>{
        res.send(err)
    })
}
exports.cityData=(req,res)=>{
    state.find({name:req.params.statenm}).then((info)=>{
        city.find({stateid:info[0]._id}).then((info)=>{
            res.send(info)
        })
    }).catch((err)=>{
        res.send(err)
    })
}