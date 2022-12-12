const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*紐づけるためのデータの挿入*/

let sqls = [
  `insert into link ("single_id","album_id","offer_id") values ("","","");`,
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