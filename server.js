var express = require('express');
var app = express();
var multer = require('multer');
var ext = require('file-extension');
var config = require('./config');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');

var s3 = new aws.S3({
  accessKeyId: config.aws.accessKey,
  secretAccessKey: config.aws.secretKey
});

var storage = multerS3({
  s3: s3,
  bucket: 'platzigram-s',
  acl: 'public-read',
  metadata: function(req, file, cb){    
    cb(null, {fieldName: file.fieldname})
  },
  key: function(req, file, cb){
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Platzigram' });
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Platzigram - Signup' });
})

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Platzigram - Signin' });
})

app.get('/api/pictures', function (req, res, next) {
  var pictures = [
    {
      user: {
        username: 'Sebastian',
        avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAZtAAAAJGFkODQyZTk1LTk1OGQtNGU5Ni1hN2JmLTI1NDRlNzBiNzNkNw.jpg'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'Sebastian',
        avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAZtAAAAJGFkODQyZTk1LTk1OGQtNGU5Ni1hN2JmLTI1NDRlNzBiNzNkNw.jpg'
      },
      url: 'office.jpg',
      likes: 1,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];

  setTimeout(function () {
    res.send(pictures);  
  }, 2000)
});

app.post('/api/pictures', function(req, res){
  upload(req, res, function(err){
    if(err) {
      console.log(err);
      return res.status(500).send("Error uploading file");
    }else{
      res.status(200).send('File uploaded');
    }
  })
})

app.get('/api/user/:username', (req, res) => {
  const user = {
    username: 'Sebastian',
    avatar: 'http://www.gfxmag.com/wp-content/uploads/2016/07/javascript-vector-logo.png',
    pictures: [
      {
        id: 1,
        src: 'https://www.codejobs.biz/public/images/blog/original/8a6f2bbfdf74f6d.jpg',
        likes: 3
      },
      {
        id: 2,
        src: 'http://cdn.tutorialzine.com/wp-content/uploads/2014/04/10-mistakes-javascript-beginners-make.jpg',
        likes: 1
      },
      {
        id: 3,
        src: 'http://cdn.tutorialzine.com/wp-content/uploads/2014/04/10-mistakes-javascript-beginners-make.jpg',
        likes: 10
      },
      {
        id: 4,
        src: 'http://cdn.tutorialzine.com/wp-content/uploads/2014/04/10-mistakes-javascript-beginners-make.jpg',
        likes: 0
      },
      {
        id: 5,
        src: 'http://cdn.tutorialzine.com/wp-content/uploads/2014/04/10-mistakes-javascript-beginners-make.jpg',
        likes: 23
      },
      {
        id: 6,
        src: 'http://cdn.tutorialzine.com/wp-content/uploads/2014/04/10-mistakes-javascript-beginners-make.jpg',
        likes: 11
      }
    ]
  }

  res.send(user);
})

app.get('/:username', function (req, res) {
  res.render('index', { title: `Platzigram - ${req.params.username}` });
})

app.get('/:username/:id', function (req, res) {
  res.render('index', { title: `Platzigram - ${req.params.username}` });
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
})