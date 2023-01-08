const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test1.db');

/*曲データの挿入*/

let sqls = [
  
   `insert into songs2 ("name","album_id","single_id") values ("フラッシュバック","1","");`,

   `insert into songs2 ("name","album_id","single_id") values ("未来の破片","1","1");`,

   `insert into songs2 ("name",,"album_id","single_id") values ("電波塔","1","");`,

   `insert into songs2 ("name","album_id","single_id") values ("アンダースタンド","1","");`,

   `insert into songs2 ("name","album_id","single_id") values ("夏の日、残像","1","");`,

   `insert into songs2 ("name","album_id","single_id") values ("無限グライダー","1","");`,

   `insert into songs2 ("name","album_id","single_id") values ("その訳を","1","1");`,

   `insert into songs2 ("name","album_id","single_id") values ("N.G.S","1","");`,

   `insert into songs2 ("name","album_id","single_id") values ("自閉探索","1","");`,

   `insert into songs2 ("name","album_id","single_id") values ("E","1","");`,

   `insert into songs2 ("name","album_id","single_id") values ("君という花","1","2");`,

   `insert into songs2 ("name","album_id","single_id") values ("ノーネーム","1","");`,
  
  `insert into songs2 ("name","album_id","single_id") values ("振動覚","2","");`,

   `insert into songs2 ("name","album_id","single_id") values ("リライト","2","");`,

   `insert into songs2 ("name","album_id","single_id") values ("君の街まで","2","");`,

   `insert into songs2 ("name","album_id","single_id") values ("マイワールド","2","");`,

   `insert into songs2 ("name","album_id","single_id") values ("夜の向こう","2","");`,

   `insert into songs2 ("name","album_id","single_id") values ("ラストシーン","2","");`,

   `insert into songs2 ("name","album_id","single_id") values ("サイレン","2","");`,

   `insert into songs2 ("name","album_id","single_id") values ("Re:Re:","2","");`,

   `insert into songs2 ("name","album_id","single_id") values ("24時","2","");`,

   `insert into songs2 ("name","album_id","single_id") values ("真夜中と真昼の夢","2","");`,

   `insert into songs2 ("name","album_id","single_id") values ("海岸通り","2","");`,

   `insert into songs2 ("name","album_id","single_id") values ("ループ&ループ","2","");`,

  `insert into songs2 ("name","album_id","single_id") values ("藤沢ルーザー","3","");`,

   `insert into songs2 ("name","album_id","single_id") values ("鵠沼サーフ","3","");`,

   `insert into songs2 ("name","album_id","single_id") values ("江の島エスカー","3","");`,

   `insert into songs2 ("name","album_id","single_id") values ("腰越クライベイビー","3","");`,

   `insert into songs2 ("name","album_id","single_id") values ("七里ヶ浜スカイウォーク","3","");`,

   `insert into songs2 ("name","album_id","single_id") values ("稲村ヶ崎ジェーン","3","");`,

   `insert into songs2 ("name","album_id","single_id") values ("極楽寺ハートブレイク","3","");`,

   `insert into songs2 ("name","album_id","single_id") values ("長谷サンズ","3","");`,

   `insert into songs2 ("name","album_id","single_id") values ("由比ヶ浜カイト","3","");`,

   `insert into songs2 ("name","album_id","single_id") values ("鎌倉グッドバイ","3","");`,
  
  `insert into songs2 ("name","album_id","single_id") values ("エントランス","","1");`,

  `insert into songs2 ("name","album_id","single_id") values ("ロケットNo.4","","2");`,

  `insert into songs2 ("name","album_id","single_id") values ("サイレン#","","3");`,

  `insert into songs2 ("name","album_id","single_id") values ("羅針盤","","4");`,
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