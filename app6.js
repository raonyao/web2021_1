const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test1.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const message = "";
  res.render('akg', {mes:message});
});

app.get("/member", (req, res) => {
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

app.get("/album", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select id, name, releaseday, quantity from album order by releaseday" + desc + ";";
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

app.get("/single", (req, res) => {
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

app.get("/songs", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select id, name from songs2;";
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

app.get("/akg_search", (req, res) => {
    console.log(req.query.name);    
    let desc = "";
    if( req.query.name ) name = " req.query.name";
    let sql = "select id, name, releaseday, quantity from album where name = " + name + "order by id" + desc + ";";
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

app.get("/album/:id", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select name from songs2 where album_id=" + req.params.id + ";"
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

app.get("/single/:id", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select name from songs2 where single_id=" + req.params.id + ";"
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

app.get("/album_add", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
     let sql ="insert into album (name, releaseday, quantity) values (" + `"` + req.query.name + `"` + "," + `"`+ req.query.day + `"` + "," + `"` + req.query.quantity + `"` + ");"
    console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
            console.log(data);    // ③
            res.render('akg', {data:data});
        })
    })
})

app.get("/album_del", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
     let sql ="delete from album where id=" + req.query.id + ";"
   // console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
            console.log(data);    // ③
            res.render('akg', {data:data});
        })
    })
})

app.get("/songs2_add", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
     let sql ="insert into songs2 (name, album_id) values (" + `"` + req.query.name + `"` + "," + req.query.aid + ");"
    console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
            console.log(data);    // ③
            res.render('akg', {data:data});
        })
    })
})
app.get("/songs_del", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
     let sql ="delete from songs2 where id=" + req.query.id + ";"
   // console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
            console.log(data);    // ③
            res.render('akg', {data:data});
        })
    })
})

app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
