const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test1.db');

/*シングルデータの挿入*/

let sqls = [
  `insert into single ("name","releaseday","quantity") values ("未来の破片","2003年8月6日","3曲");`,

  `insert into single ("name","releaseday","quantity") values ("君という花","2003年10月16日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("サイレン","2004年4月14日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("ループ&ループ","2004年5月19日","3曲");`,
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