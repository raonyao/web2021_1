const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sqls = [
  `insert into stripping ("name","dropratio","monster_id") values ("狗竜の上皮","40%","1");`,
  `insert into stripping ("name","dropratio","monster_id") values ("狗竜の尖爪","28%","1");`,
  `insert into stripping ("name","dropratio","monster_id") values ("鳴き袋","17%","1");`,
  `insert into stripping ("name","dropratio","monster_id") values ("狗竜の皮","5%","1");`,
  `insert into stripping ("name","dropratio","monster_id") values ("狗竜の爪","5%","1");`,
  `insert into stripping ("name","dropratio","monster_id") values ("鳥竜玉","5%","1");`,
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