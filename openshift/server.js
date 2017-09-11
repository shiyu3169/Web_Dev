var express = require('express');
var mongoose = require('mongoose');
var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/test'
mongoose.connect(connectionString);

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    books: Array,
    following: Array,
    follower: Array
});

var BookSchema = new mongoose.Schema({
    title: String,
    authors: Array,
    publisher: String,
    publishedDate: Date,
    //ISBN10: Integer,
    //ISBN13: Integer,
    language: String,
    //pageCount: Integer,
    description: String
})

var UserModel = mongoose.model("UserModel", UserSchema);

//var User1 = new UserModel({username: "alice", password:"wonderland", email: "alice.wonderland@gmail.com"});
//var User2 = new UserModel({ username: "bob", password: "marley", email: "bob.marley@gmail.com" });

//User1.save();
//User2.save();

var BookModel = mongoose.model("BookModel", BookSchema);

var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');

var bodyParser = require('body-parser');
var multer = require('multer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.use(session({ secret: 'this is the secret' }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));


app.get('api/book', function(req, res){
    BookModel.find(function(err, books) {
        res.json(books);
    });
});

passport.use(new LocalStrategy(
function(username, password, done)
{
    UserModel.findOne({ username: username, password: password }, function (err, user) {
        if(user)
        {
            return done(null, user);
        }
        return done(null, false, { message: 'Unable to login' });
    });
    
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

   

app.post("/login", passport.authenticate('local'), function (req, res) {
    //console.log("/login");
    //console.log(req.user);
    res.json(req.user);
});


app.get("/loggedin", function (req, res) {
    //console.log("/login");
    //console.log(req.user);
    res.send(req.isAuthenticated() ? req.user : '0');
});

app.post("/register", function (req, res) {
    UserModel.findOne({username: req.body.username}, function(err, user){
        if(user)
        {
            res.json(null);
            return;
        }
        else
        {
            var newUser = new UserModel(req.body);
            newUser.save(function (err, user)
            {
                req.login(user, function (err)
                {
                    if (err) { return next(err); }
                    res.json(user);
                });
            
            });
        }
         
    });
  
});

var ip   = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);