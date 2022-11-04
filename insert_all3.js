const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sqls = [
  `insert into lostitem ("name","dropratio","monster_id") values ("竜のナミダ","45%","1");`,
  `insert into lostitem ("name","dropratio","monster_id") values ("竜の大粒ナミダ","40%","1");`,
  `insert into lostitem ("name","dropratio","monster_id") values ("狗竜の大皮","20%","1");`,
  `insert into lostitem ("name","dropratio","monster_id") values ("鳥竜玉","5%","1");`,
  `insert into lostitem ("name","dropratio","monster_id") values ("竜のナミダ","50%","2");`,
  `insert into lostitem ("name","dropratio","monster_id") values ("竜の大粒ナミダ","25%","2");`,
  `insert into lostitem ("name","dropratio","monster_id") values ("鳥竜玉","2%","2");`,
  `insert into lostitem ("name","dropratio","monster_id") values ("毒狗竜の上皮","23%","2");`,
  ]
for(let sql of sqls){
  db.serialize( () => {
	  db.run( sql, (error, row) => {
	  	if(error) {
		  	console.log('Error: ', error );
		  	return;
		  }
		  console.log( "データを追加しました" );
	  });
  });
}