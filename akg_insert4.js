const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test1.db');

/*曲データの挿入*/

let sqls = [
  
   `insert into songs ("name") values ("フラッシュバック");`,

   `insert into songs ("name") values ("未来の破片");`,

   `insert into songs ("name") values ("電波塔");`,

   `insert into songs ("name") values ("アンダースタンド");`,

   `insert into songs ("name") values ("夏の日、残像");`,

   `insert into songs ("name") values ("無限グライダー");`,

   `insert into songs ("name") values ("その訳を");`,

   `insert into songs ("name") values ("N.G.S");`,

   `insert into songs ("name") values ("自閉探索");`,

   `insert into songs ("name") values ("E");`,

   `insert into songs ("name") values ("君という花");`,

   `insert into songs ("name") values ("ノーネーム");`,
  
  `insert into songs ("name") values ("振動覚");`,

   `insert into songs ("name") values ("リライト");`,

   `insert into songs ("name") values ("君の街まで");`,

   `insert into songs ("name") values ("マイワールド");`,

   `insert into songs ("name") values ("夜の向こう");`,

   `insert into songs ("name") values ("ラストシーン");`,

   `insert into songs ("name") values ("サイレン");`,

   `insert into songs ("name") values ("Re:Re:");`,

   `insert into songs ("name") values ("24時");`,

   `insert into songs ("name") values ("真夜中と真昼の夢");`,

   `insert into songs ("name") values ("海岸通り");`,

   `insert into songs ("name") values ("ループ&ループ");`,

  `insert into songs ("name") values ("藤沢ルーザー");`,

   `insert into songs ("name") values ("鵠沼サーフ");`,

   `insert into songs ("name") values ("江の島エスカー");`,

   `insert into songs ("name") values ("腰越クライベイビー");`,

   `insert into songs ("name") values ("七里ヶ浜スカイウォーク");`,

   `insert into songs ("name") values ("稲村ヶ崎ジェーン");`,

   `insert into songs ("name") values ("極楽寺ハートブレイク");`,

   `insert into songs ("name") values ("長谷サンズ");`,

   `insert into songs ("name") values ("由比ヶ浜カイト");`,

   `insert into songs ("name") values ("鎌倉グッドバイ");`,
  
  `insert into songs ("name") values ("エントランス");`,

  `insert into songs ("name") values ("ロケットNo.4");`,

  `insert into songs ("name") values ("サイレン#");`,

  `insert into songs ("name") values ("羅針盤");`,
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