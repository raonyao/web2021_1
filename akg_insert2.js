const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test1.db');

/*アルバムデータの挿入*/

let sqls = [
  `insert into album ("name","releaseday","quantity") values ("君繋ファイブエム","2003年11月19日","12曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("ソルファ","2004年10月20日","12曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("サーフ　ブンガク　カマクラ","2008年11月26日","10曲");`,
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