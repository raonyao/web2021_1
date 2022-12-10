const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sqls = [
  `insert into stripping ("name","dropratio","monster_id") values ("毒狗竜の上皮","40%","2");`,
  `insert into stripping ("name","dropratio","monster_id") values ("毒狗竜の堅腕甲","20%","2");`,
  `insert into stripping ("name","dropratio","monster_id") values ("猛毒袋","25%","2");`,
  `insert into stripping ("name","dropratio","monster_id") values ("毒狗竜の皮","8%","2");`,
  `insert into stripping ("name","dropratio","monster_id") values ("毒狗竜の堅腕","7%","2");`,
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