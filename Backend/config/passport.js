var passport=require('passport')
var LocalStrategy=require('passport-local').Strategy
app.use(passport.initialize())

passport.serializeUser((user,done)=>{
    return done(null,user)
})
passport.deserializeUser((user,done)=>{
    return done(null,user)
})

passport.use(new LocalStrategy((username,password,done)=>{
    stud.findOne({name:username}).then((user)=>{
        if(bcrypt.compareSync(password,user.password)){
            return done(null,user)
        }
        else
            return done(null,false)
    })
}))