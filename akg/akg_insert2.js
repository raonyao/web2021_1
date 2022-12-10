const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

let sqls = [
  `insert into album ("name","releaseday","quantity") values ("君繋ファイブエム","2003年11月19日","12曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("ソルファ","2004年10月20日","12曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("ファンクラブ","2006年3月15日","11曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("フィードバックファイル","2006年10月25日","16曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("ワールド　ワールド　ワールド","2008年3月26日","13曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("未だ見ぬ明日に","2008年6月11日","6曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("サーフ　ブンガク　カマクラ","2008年11月26日","10曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("マジックディスク","2010年6月23日","13曲");`,

  `insert into album ("name","releaseday","quantity") values ("BEST HIT AKG","2012年1月18日","17曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("ランドマーク","2012年9月12日","12曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("フィードバックファイル2","2014年2月26日","17曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("崩壊アンプリファー","2014年4月26日","6曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("Wonder Future","2015年6月24日","11曲");`,

   `insert into album ("name","releaseday","quantity") values ("ソルファ2016","2016年11月30日","12曲");`,

  `insert into album ("name","releaseday","quantity") values ("BEST HIT AKG2(2012-20018","2018年3月28日","17曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("ホームタウン","2018年12月5日","10曲");`,
  
  `insert into album ("name","releaseday","quantity") values ("プラネットフォークス","2022年3月30日","12曲");`,
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