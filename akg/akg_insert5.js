const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*曲データの挿入*/

let sqls = [
  
   `insert into song ("name") values ("フラッシュバック");`,

   `insert into song ("name") values ("未来の破片");`,

   `insert into song ("name") values ("電波塔");`,

   `insert into song ("name") values ("アンダースタンド");`,

   `insert into song ("name") values ("夏の日、残像");`,

   `insert into song ("name") values ("無限グライダー");`,

   `insert into song ("name") values ("その訳を");`,

   `insert into song ("name") values ("N.G.S");`,

   `insert into song ("name") values ("自閉探索");`,

   `insert into song ("name") values ("E");`,

   `insert into song ("name") values ("君という花");`,

   `insert into song ("name") values ("ノーネーム");`,

   `insert into song ("name") values ("振動覚");`,

   `insert into song ("name") values ("リライト");`,

   `insert into song ("name") values ("君の街まで");`,

   `insert into song ("name") values ("マイワールド");`,

   `insert into song ("name") values ("夜の向こう");`,

   `insert into song ("name") values ("ラストシーン");`,

   `insert into song ("name") values ("サイレン");`,

   `insert into song ("name") values ("Re:Re:");`,

   `insert into song ("name") values ("24時");`,

   `insert into song ("name") values ("真夜中と真昼の夢");`,

   `insert into song ("name") values ("海岸通り");`,

   `insert into song ("name") values ("ループ&ループ");`,

   `insert into song ("name") values ("暗号のワルツ");`,

   `insert into song ("name") values ("ワールドアパート");`,

   `insert into song ("name") values ("ブラックアウト");`,

   `insert into song ("name") values ("桜草");`,

   `insert into song ("name") values ("路地裏のうさぎ");`,

   `insert into song ("name") values ("ブルートレイン");`,

   `insert into song ("name") values ("真冬のダンス");`,

   `insert into song ("name") values ("バタフライ");`,

   `insert into song ("name") values ("センスレス");`,

   `insert into song ("name") values ("月光");`,

   `insert into song ("name") values ("タイトロープ");`,

   `insert into song ("name") values ("エントランス");`,

   `insert into song ("name") values ("ロケットNo.4");`,

   `insert into song ("name") values ("絵画教室");`,

   `insert into song ("name") values ("サイレン#");`,

   `insert into song ("name") values ("夕暮れの紅");`,

   `insert into song ("name") values ("Hold me tight");`,

   `insert into song ("name") values ("ロードムービー");`,

   `insert into song ("name") values ("飛べない魚");`,

   `insert into song ("name") values ("堂々巡りの夜");`,

   `insert into song ("name") values ("嘘とワンダーランド");`,

   `insert into song ("name") values ("永遠に");`,

   `insert into song ("name") values ("ワールド　ワールド　ワールド");`,

   `insert into song ("name") values ("アフターダーク");`,

   `insert into song ("name") values ("旅立つ君へ");`,

   `insert into song ("name") values ("ネオテニー");`,

   `insert into song ("name") values ("トラべログ");`,

   `insert into song ("name") values ("No.9");`,

   `insert into song ("name") values ("ナイトダイビング");`,

   `insert into song ("name") values ("ライカ");`,

   `insert into song ("name") values ("惑星");`,

   `insert into song ("name") values ("転がる岩、君に朝が降る");`,

   `insert into song ("name") values ("ワールド　ワールド");`,

   `insert into song ("name") values ("或る街の群青");`,

   `insert into song ("name") values ("新しい世界");`,

   `insert into song ("name") values ("脈打つ生命");`,

   `insert into song ("name") values ("サイエンスフィクション");`,

   `insert into song ("name") values ("ムスタング");`,

   `insert into song ("name") values ("深呼吸");`,

   `insert into song ("name") values ("融雪");`,

   `insert into song ("name") values ("未だ見ぬ明日に");`,

   `insert into song ("name") values ("藤沢ルーザー");`,

   `insert into song ("name") values ("鵠沼サーフ");`,

   `insert into song ("name") values ("江の島エスカー");`,

   `insert into song ("name") values ("腰越クライベイビー");`,

   `insert into song ("name") values ("七里ヶ浜スカイウォーク");`,

   `insert into song ("name") values ("稲村ヶ崎ジェーン");`,

   `insert into song ("name") values ("極楽寺ハートブレイク");`,

   `insert into song ("name") values ("長谷サンズ");`,

   `insert into song ("name") values ("由比ヶ浜カイト");`,

   `insert into song ("name") values ("鎌倉グッドバイ");`,

   `insert into song ("name") values ("新世紀のラブソング");`,

   `insert into song ("name") values ("マジックディスク");`,

   `insert into song ("name") values ("双子葉");`,

   `insert into song ("name") values ("さよならロストジェネレイション");`,

   `insert into song ("name") values ("迷子犬と雨のビート");`,

   `insert into song ("name") values ("青空と黒い猫");`,

   `insert into song ("name") values ("架空生物のブルース");`,

   `insert into song ("name") values ("ラストダンスは悲しみを乗せて");`,

   `insert into song ("name") values ("マイクロフォン");`,

   `insert into song ("name") values ("ライジングサン");`,

   `insert into song ("name") values ("イエス");`,

   `insert into song ("name") values ("橙");`,

   `insert into song ("name") values ("遥か彼方");`,

  `insert into song ("name") values ("ソラニン");`,

   `insert into song ("name") values ("マーチングバンド");`,

   `insert into song ("name") values ("All right part2");`,

   `insert into song ("name") values ("N2");`,

   `insert into song ("name") values ("1.2.3.4.5.6.Baby");`,

   `insert into song ("name") values ("AとZ");`,

   `insert into song ("name") values ("大洋航路");`,

   `insert into song ("name") values ("バイシクルレース");`,

   `insert into song ("name") values ("それでは、また明日");`,

   `insert into song ("name") values ("1980");`,

   `insert into song ("name") values ("マシンガンと形容詞");`,

   `insert into song ("name") values ("レールロード");`,

   `insert into song ("name") values ("踵で愛を打ち鳴らせ");`,

   `insert into song ("name") values ("アネモネの咲く春に");`,

   `insert into song ("name") values ("ローリングストーン");`,

   `insert into song ("name") values ("スローダウン");`,

   `insert into song ("name") values ("十二進法の夕景");`,

   `insert into song ("name") values ("夏蝉");`,

   `insert into song ("name") values ("夜のコール");`,

   `insert into song ("name") values ("白に染めろ");`,

   `insert into song ("name") values ("雨上がりの希望");`,

   `insert into song ("name") values ("ひかり");`,

   `insert into song ("name") values ("オールドスクール");`,

   `insert into song ("name") values ("リロードリロード");`,

   `insert into song ("name") values ("夜を越えて");`,

   `insert into song ("name") values ("冷蔵庫のろくでもないジョーク");`,

   `insert into song ("name") values ("ケモノノケモノ");`,

   `insert into song ("name") values ("今を生きて");`,

   `insert into song ("name") values ("羅針盤");`,

   `insert into song ("name") values ("粉雪");`,

   `insert into song ("name") values ("青の歌");`,

   `insert into song ("name") values ("サンディ");`,

   `insert into song ("name") values ("12");`,

   `insert into song ("name") values ("Easter/復活祭");`,

   `insert into song ("name") values ("Little Lennon/小さなレノン");`,

   `insert into song ("name") values ("Winner and Loser/勝者と敗者");`,

   `insert into song ("name") values ("Caterpillar/芋虫");`,

   `insert into song ("name") values ("EternalSunshine/永遠の陽光");`,

   `insert into song ("name") values ("Planet of the Apes/猿の惑星");`,

   `insert into song ("name") values ("Standard/スタンダード");`,

   `insert into song ("name") values ("Wonder Future/ワンダーフューチャー");`,

   `insert into song ("name") values ("Prisoner in a Frame/額の中の囚人");`,

   `insert into song ("name") values ("Signal on the Street/街頭のシグナル");`,

   `insert into song ("name") values ("Opera Glasses/オペラグラス");`,

  `insert into song ("name") values ("Right Now");`,

  `insert into song ("name") values ("ブラッドサーキュレーター");`,

  `insert into song ("name") values ("生者のマーチ");`,

   `insert into song ("name") values ("クロックワーク");`,

   `insert into song ("name") values ("ホームタウン");`,

   `insert into song ("name") values ("レインボーフラッグ");`,

   `insert into song ("name") values ("サーカス");`,

   `insert into song ("name") values ("荒野を歩け");`,

   `insert into song ("name") values ("UCLA");`,

   `insert into song ("name") values ("Motor Pool");`,

   `insert into song ("name") values ("ダンシングガール");`,

   `insert into song ("name") values ("さよならソルジャー");`,

   `insert into song ("name") values ("ボーイズ&ガールズ");`,

   `insert into song ("name") values ("You To You");`,

   `insert into song ("name") values ("エンパシー");`,

   `insert into song ("name") values ("ダイアローグ");`,

   `insert into song ("name") values ("De Arriba");`,

   `insert into song ("name") values ("フラワーズ");`,

   `insert into song ("name") values ("星の夜、ひかりの街");`,

   `insert into song ("name") values ("触れたい確かめたい");`,

   `insert into song ("name") values ("雨音");`,

   `insert into song ("name") values ("Gimme Hope");`,

   `insert into song ("name") values ("C'mon");`,

   `insert into song ("name") values ("再見");`,

   `insert into song ("name") values ("Be Alright");`,

   `insert into song ("name") values ("Hello Hello");`,

   `insert into song ("name") values ("Loser");`,

   `insert into song ("name") values ("タイムトラベラー");`,

   `insert into song ("name") values ("八景");`,

   `insert into song ("name") values ("お祭りのあと");`,

   `insert into song ("name") values ("祝日");`,

   `insert into song ("name") values ("スリープ");`,

   `insert into song ("name") values ("廃墟の記憶");`,

   `insert into song ("name") values ("イエロー");`,

   `insert into song ("name") values ("はじまりの季節");`,

   `insert into song ("name") values ("出町柳パラレルユニバース");`,

   `insert into song ("name") values ("I Just Threw Out Love Of My Dreams");`,

   `insert into song ("name") values ("追浜フィーリングダウン");`,

   `insert into song ("name") values ("柳小路パラレルユニバース");`,

   `insert into song ("name") values ("宿縁");`,
  
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