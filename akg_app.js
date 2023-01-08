const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const message = "";
  res.render('akg', {mes:message});
});

app.get("/akg/member", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select id, name,birthday, bloodtype,instrument from member;";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('akg', {mes:"エラーです."});
            }
            //console.log(data);    // ③
            res.render('akg_select1', {data:data});
        })
    })
})

app.get("/akg/album", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select id, name, releaseday, quantity from album  order by id" + desc + ";";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('akg', {mes:"エラーです.."});
            }
            console.log({data});    // ③
            res.render('akg_select2', {data:data});
        })
    })
})

app.get("/akg_search", (req, res) => {
    console.log(req.query.name);    
    let desc = "";
    if( req.query.desc ) desc = " desc";
    if( req.query.name ) name = " req.query.name";
    let sql = "select id, name, releaseday, quantity from album where name= " + name + "order by id" + desc + ";";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('akg', {mes:"エラーです.."});
            }
            console.log(data);    // ③
            res.render('akg_select2', {data:data});
        })
    })
})

app.get("/akg/single", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select id, name, releaseday, quantity from single;";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('akg', {mes:"エラーです..."});
            }
            console.log(data);    // ③
            res.render('akg_select3', {data:data});
        })
    })
})

app.get("/akg/song", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select id, name from song;";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('akg', {mes:"エラーです...."});
            }
            console.log(data);    // ③
            res.render('akg_select4', {data:data});
        })
    })
})

app.get("/akg/offer", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select id, name from offer;";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('akg', {mes:"エラーです....."});
            }
            console.log(data);    // ③
            res.render('akg_select5', {data:data});
        })
    })
})

app.get("/akg/album_detail/:id", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select song.name as songname, single.name as singlename, offer.name as offername from link join album on link.album_id = album.id join song on link.song_id = song.id join single on link.single_id = single.id join offer on link.offer_id = offer.id where link.album_id=" + req.params.id + ";";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('akg', {mes:"エラーです....."});
            }
            console.log(data);    // ③
            res.render('akg_select6', {data:data});
        })
    })
})

app.get("/akg/album_detail2/:id", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select name, from song inner join album_link1 on song.id = album_link1.song_id where album_link1.id=" + req.params.id + ";";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('akg', {mes:"エラーです....."});
            }
            console.log(data);    // ③
            res.render('akg_select6', {data:data});
        })
    })
})

app.get("/monster/:id", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select lostitem.name as lostitemname, dropratio from monster inner join lostitem on lostitem.monster_id=monster.id where monster.id=" + req.params.id + ";";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('MH', {mes:"エラーです"});
            }
            console.log(data);    // ③
            res.render('select2', {data:data});
        })
    })
})

app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません.......');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
