const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*メンバーデータの挿入*/

let sqls = [
  `insert into member ("name","birthday","bloodtype","instrument") values ("後藤正文","1976年12月2日(46歳)","O型","ボーカル、ギター");`,
   `insert into member ("name","birthday","bloodtype","instrument") values ("喜多健介","1977年1月24日(45歳)","A型","ボーカル、ギター");`,
   `insert into member ("name","birthday","bloodtype","instrument") values ("山田貴洋","1977年8月19日(45歳)","A型","ベース");`,
   `insert into member ("name","birthday","bloodtype","instrument") values ("伊地知潔","1976年9月25日(45歳)","A型","ドラム");`,
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