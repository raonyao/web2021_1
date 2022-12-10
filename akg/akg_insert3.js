const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*シングルデータの挿入*/

let sqls = [
  `insert into single ("name","releaseday","quantity") values ("未来の破片","2003年8月6日","3曲");`,

  `insert into single ("name","releaseday","quantity") values ("君という花","2003年10月16日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("サイレン","2004年4月14日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("ループ&ループ","2004年5月19日","3曲");`,

  `insert into single ("name","releaseday","quantity") values ("リライト","2004年8月4日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("君の街まで","2004年9月23日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("ブルートレイン","2005年11月30日","4曲");`,

  `insert into single ("name","releaseday","quantity") values ("ワールドアパート","2006年2月15日","3曲");`,

  `insert into single ("name","releaseday","quantity") values ("或る街の群青","2006年11月29日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("アフターダーク","2007年11月7日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("転がる岩、君に朝が降る","2008年2月6日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("藤沢ルーザー","2008年10月15日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("新世紀のラブソング","2009年12月2日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("ソラニン","2010年3月31日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("迷子犬と雨のビート","2010年5月26日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("マーチングバンド","2011年11月30日","3曲");`,

  `insert into single ("name","releaseday","quantity") values ("踵で愛を打ち鳴らせ","2012年4月11日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("それでは、また明日","2012年7月25日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("今を生きて","2013年2月20日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("Easter","2015年3月18日","3曲");`,

  `insert into single ("name","releaseday","quantity") values ("Right Now","2016年1月6日","4曲");`,

  `insert into single ("name","releaseday","quantity") values ("Re:Re:","2016年3月16日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("ブラッドサーキュレーター","2016年7月13日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("荒野を歩け","2017年3月29日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("ボーイズ&ガールズ","2018年9月26日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("Dororo/解放区","2019年5月15日","2曲");`,

  `insert into single ("name","releaseday","quantity") values ("ダイアローグ/触れたい確かめたい","2020年10月7日","3曲");`,

  `insert into single ("name","releaseday","quantity") values ("エンパシー","2021年8月4日","5曲");`,

  `insert into single ("name","releaseday","quantity") values ("出町柳パラレルユニバース","2022年9月28日","4曲");`,

  `insert into single ("name","releaseday","quantity") values ("宿縁","2023年2月8日","3曲");`,

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