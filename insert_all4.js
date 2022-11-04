const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sqls = [
  `insert into capture ("name","dropratio","monster_id") values ("鳴き袋×2","45%","1");`,
  `insert into capture ("name","dropratio","monster_id") values ("狗竜の尖爪","30%","1");`,
  `insert into capture ("name","dropratio","monster_id") values ("狗竜の大皮","20%","1");`,
  `insert into capture ("name","dropratio","monster_id") values ("鳥竜玉","5%","1");`,
  `insert into capture ("name","dropratio","monster_id") values ("猛毒袋","38%","2");`,
  `insert into capture ("name","dropratio","monster_id") values ("毒狗竜の堅腕甲","5%","2");`,
  `insert into capture ("name","dropratio","monster_id") values ("毒狗竜の上皮","15%","2");`,
  `insert into capture ("name","dropratio","monster_id") values ("毒袋×2","8%","2");`,
  `insert into capture ("name","dropratio","monster_id") values ("鳥竜玉","5%","2");`,
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