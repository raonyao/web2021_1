const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sqls = [
  `insert into item ("itemname","dropratio","monster_id") values ("眠狗竜の上皮","22%","2");`,
  `insert into item ("itemname","dropratio","monster_id") values ("眠狗竜の尖爪","37%","2");`,
  `insert into item ("itemname","dropratio","monster_id") values ("昏睡袋","31%","2");`,
  `insert into item ("itemname","dropratio","monster_id") values ("眠狗竜の皮","5%","2");`,
  `insert into item ("itemname","dropratio","monster_id") values ("眠狗竜の爪","5%","2");`,
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