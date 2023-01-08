const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*紐づけるためのデータの挿入*/

let sqls = [
  `insert into link ("song_id","single_id","album_id","offer_id") values ("1","","1","");`, //1、フラッシュバック、、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("1","","4","");`, //1、フラッシュバック、、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("2","1","1","");`,//2、未来の破片、未来の破片、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("2","1","9","");`,//2、未来の破片、未来の破片、BEST HIT AKG、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("3","","1","");`,//3、電波塔、、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("4","","1","");`,//4、アンダースタンド、、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("4","","4","");`, //4、アンダースタンド、、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("4","","9","");`,//4、アンダースタンド、、BEST HIT AKG、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("5","","1","");`,//5、夏の日、残像、、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("6","","1","");`,//6、無限グライダー、、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("7","1","1","");`,//7、その訳を、未来の破片、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("8","","1","");`,//8、N.G.S、、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("8","","4","");`, //8、N.G.S、、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("9","","1","");`,//9、自閉探索、、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("9","","4","");`,//9、自閉探索、、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("10","","1","");`,//10、E、、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("11","2","1","");`,//11、君という花、君という花、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("11","2","9","");`,//11、君という花、君という花、BEST HIT AKG、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("12","","1","");`, //12、ノーネーム、、君繋ファイブエム、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("13","","2","");`,//13、振動覚、、ソルファ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("14","5","2","2");`,//14、リライト、リライト、ソルファ、鋼の錬金術師//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("14","5","9","2");`,//14、リライト、リライト、BEST HIT AKG、鋼の錬金術師//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("14","5","15","2");`,
//14、リライト、リライト、BEST HIT AKG2、鋼の錬金術師//
  `insert into link ("song_id","single_id","album_id","offer_id") values ("15","6","2","");`,//15、君の街まで、君の街まで、ソルファ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("15","6","9","");`, //15、君の街まで、君の街まで、BEST HIT AKG、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("16","","2","");`,//16、マイワールド、、ソルファ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("17","","2","");`,//17、夜の向こう、、ソルファ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("18","","2","");`,//18、ラストシーン、、ソルファ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("19","3","2","");`,//19、サイレン、サイレン、ソルファ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("19","3","4","");`,//19、サイレン、サイレン、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("20","22","2","10");`, //20、Re:Re:、Re:Re:、ソルファ、僕だけがいない街//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("20","22","4","10");`,//20、Re:Re:、Re:Re:、フィードバックファイル、僕だけがいない街//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("20","22","15","10");`,//20、Re:Re:、Re:Re:、BEST HIT AKG2、僕だけがいない街//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("21","","2","");`,//21、24時、、ソルファ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("22","","2","");`,//22、真夜中と真昼の夢、、ソルファ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("23","","2","");`,//23、海岸通り、、ソルファ、//

    `insert into link ("song_id","single_id","album_id","offer_id") values ("23","","15","");`, //23、海岸通り、、BEST HIT AKG2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("24","4","2","");`,//24、ループ&ループ、ループ&ループ、ソルファ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("24","4","9","");`,//24、ループ&ループ、ループ&ループ、BEST HIT AKG、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("25","","3","");`,//25、暗号のワルツ、、ファンクラブ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("26","8","3","");`,//26、ワールドアパート、ワールドアパート、ファンクラブ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("27","","3","");`,//27、ブラックアウト、、ファンクラブ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("27","","9","");`, //27、ブラックアウト、、BEST HIT AKG、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("28","","3","");`,//28、桜草、、ファンクラブ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("29","","3","");`,//29、路地裏のうさぎ、、ファンクラブ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("30","7","3","");`,//30、ブルートレイン、ブルートレイン、ファンクラブ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("30","7","9","");`,//30、ブルートレイン、ブルートレイン、BEST HIT AKG、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("31","","3","");`,//31、真冬のダンス、、ファンクラブ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("32","","3","");`, //32、バタフライ、、ファンクラブ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("33","","3","");`,//33、センスレス、、ファンクラブ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("34","7","3","");`,//34、月光、ブルートレイン、ファンクラブ、

  `insert into link ("song_id","single_id","album_id","offer_id") values ("35","","3","");`,//35、タイトロープ、、ファンクラブ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("36","1","4","");`,//36、エントランス、未来の破片、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("36","4","4","");`,//36、エントランス、ループ&ループ、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("37","2","4","");`, //37、ロケットNo.4、君という花、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("38","","4","");`,//38、絵画教室、、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("39","3","4","");`,//39、サイレン#、サイレン、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("40","5","4","");`,//40、夕暮れの紅、リライト、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("41","6","4","");`,//41、Hold  me tight、君の街まで、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("42","7","4","");`,//42、ロードムービー、ブルートレイン、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("43","7","4","");`, //43、飛べない魚、ブルートレイン、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("44","7","4","");`,//44、堂々巡りの夜、ブルートレイン、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("45","8","4","");`,//45、嘘とワンダーランド、ワールドアパート、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("46","8","4","");`,//46、永延に、ワールドアパート、フィードバックファイル、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("47","","5","");`,//47、ワールドワールドワールド、、ワールドワールドワールド、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("48","10","5","4");`,//48、アフターダーク、アフターダーク、ワールドワールドワールド、BLEACH//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("48","10","9","4");`, //48、アフターダーク、アフターダーク、BEST HIT AKG、BLEACH//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("49","","5","");`,//49、旅立つ君へ、、ワールドワールドワールド、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("50","","5","");`,//50、ネオテニー、、ワールドワールドワールド、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("51","","5","");`,//51、トラベログ、、ワールドワールドワールド、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("52","","5","");`,//52、No.9、、ワールドワールドワールド、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("53","","5","");`,//53、ナイトダイビング、、ワールドワールドワールド、//

    `insert into link ("song_id","single_id","album_id","offer_id") values ("54","","5","");`, //54、ライカ、、ワールドワールドワールド、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("55","","5","");`,//55、惑星、、ワールドワールドワールド、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("56","11","5","");`,//56、転がる岩、君に朝が降る、転がる岩、君に朝が降る、ワールドワールドワールド、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("56","11","9","");`,//56、転がる岩、君に朝が降る、転がる岩、君に朝が降る、BEST HIT AKG、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("57","","5","");`,//57、ワールドワールド、、ワールドワールドワールド、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("58","9","5","3");`,//58、或る街の群青、或る街の群青、ワールドワールドワールド、鉄コン筋クリート//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("58","9","9","3");`, //58、或る街の群青、或る街の群青、BEST HIT AKG、鉄コン筋クリート//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("59","","5","");`,//59、新しい世界、、ワールドワールドワールド、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("60","","6","");`,//60、脈打つ生命、、未だ見ぬ明日に、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("61","","6","");`,//61、サイエンスフィクション、、未だ見ぬ明日に、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("62","14","6","5");`,//62、ムスタング、ソラニン、未だ見ぬ明日に、ソラニン//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("62","14","9","5");`,//62、ムスタング、ソラニン、BEST HIT AKG、ソラニン//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("62","14","11","5");`, //62、ムスタング、ソラニン、フィードバックファイル2、ソラニン//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("63","21","6","");`,//63、深呼吸、Right Now、未だ見ぬ明日に、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("64","","6","");`,//64、融雪、、未だ見ぬ明日に、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("65","","6","");`,//65、未だ見ぬ明日に、、未だ見ぬ明日に、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("66","12","7","");`,//66、藤沢ルーザー、藤沢ルーザー、サーフブンガクカマクラ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("66","12","9","");`,//66、藤沢ルーザー、藤沢ルーザー、BEST HIT AKG、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("67","9","7","");`, //67、鵠沼サーフ、或る街の群青、サーフブンガクカマクラ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("68","11","7","");`,//68、江ノ島エスカー、転がる岩、君に朝が降る、サーフブンガクカマクラ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("69","","7","");`,//69、腰越クライベイビー、、サーフブンガクカマクラ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("70","","7","");`,//70、七里ヶ浜スカイウォーク、、サーフブンガクカマクラ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("71","","7","");`,//71、稲村ケ崎ジェーン、、サーフブンガクカマクラ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("72","","7","");`,//72、極楽寺ハートブレイク、、サーフブンガクカマクラ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("73","","7","");`, //73、長谷サンズ、、サーフブンガクカマクラ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("74","10","7","");`,//74、由比ヶ浜カイト、アフターダーク、サーフブンガクカマクラ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("75","","7","");`,//75、鎌倉グッドバイ、、サーフブンガクカマクラ、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("76","13","8","");`,//76、新世紀のラブソング、新世紀のラブソング、マジックディスク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("77","","8","");`,//77、マジックディスク、、マジックディスク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("78","","8","");`,//78、双子葉、、マジックディスク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("79","","8","");`, //79、さよならロストジェネレイション、、マジックディスク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("80","15","8","7");`,//80、迷子犬と雨のビート、迷子犬と雨のビート、マジックディスク、四畳半神話大系//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("80","15","11","7");`,//80、迷子犬と雨のビート、迷子犬と雨のビート、フィードバックファイル2、四畳半神話大系//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("81","","8","");`,//81、青空と黒い猫、、マジックディスク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("82","","8","");`,//82、架空生物のブルース、、マジックディスク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("83","","8","");`,//83、ラストダンスは悲しみを乗せて、、マジックディスク、//

    `insert into link ("song_id","single_id","album_id","offer_id") values ("84","","8","");`, //84、マイクロフォン、、マジックディスク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("85","","8","");`,//85、ライジングサン、、マジックディスク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("86","","8","");`,//86、イエス、、マジックディスク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("87","","8","");`,//87、橙、、マジックディスク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("88","","9","1");`,//88、遥か彼方、、BEST HIT AKG、NARUTO-ナルト-//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("88","","12","1");`,//88、遥か彼方、、崩壊アンプリファー、NARUTO-ナルト-//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("89","14","8","6");`, //89、ソラニン、ソラニン、マジックディスク、ソラニン//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("89","14","9","6");`, //89、ソラニン、ソラニン、BEST HIT AKG、ソラニン//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("90","16","9","");`,//90、マーチングバンド、マーチングバンド、BEST HIT AKG、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("91","","10","");`,//91、All right part2、、ランドマーク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("91","","15","");`,//91、All right part2、、BEST HIT AKG2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("92","16","10","");`,//92、N2、マーチングバンド、ランドマーク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("93","","10","");`, //93、1.2.3.4.5.6.Baby、、ランドマーク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("94","","10","");`,//94、AとZ、、ランドマーク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("95","","10","");`,//95、大洋航路、、ランドマーク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("96","","10","");`,//96、バイシクルレース、、ランドマーク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("97","18","10","8");`,//97、それでは、また明日、それでは、また明日、ランドマーク、ROAD TO NINJA -NARUTO THE MOVIE-//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("97","18","15","8");`,//97、それでは、また明日、それでは、また明日、BEST HIT AKG2、ROAD TO NINJA -NARUTO THE MOVIE-//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("98","","10","");`, //98、1980、、ランドマーク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("99","","10","");`,//99、マシンガンと形容詞、、ランドマーク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("100","","10","");`,//100、レールロード、、ランドマーク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("101","17","10","");`,//101、踵で愛を打ち鳴らせ、踵で愛を打ち鳴らせ、ランドマーク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("101","17","15","");`,//101、踵で愛を打ち鳴らせ、踵で愛を打ち鳴らせ、BEST HIT AKG2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("102","","10","");`,//102、アネモネの咲く春に、、ランドマーク、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("102","","15","");`, //102、アネモネの咲く春に、、BEST HIT AKG2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("102","","11","");`,//102、アネモネの咲く春に、、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("103","","11","");`,//103、ローリングストーン、、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("103","","15","");`,//103、ローリングストーン、、BEST HIT AKG2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("104","","11","");`,//104、スローダウン、、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("105","","11","");`,//105、十二進法の夕景、、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("106","","11","");`, //106、夏蝉、、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("107","","11","");`,//107、夜のコール、、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("108","13","11","");`,//108、白に染めろ、、新世紀のラブソング、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("109","15","11","");`,//109、雨上がりの希望、迷子犬と雨のビート、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("110","","11","");`,//110、ひかり、、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("111","16","11","");`,//111、オールドスクール、マーチングバンド、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("112","17","11","");`,//112、リロードリロード、踵で愛を打ち鳴らせ、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("113","","11","");`,//113、夜を越えて、、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("113","","15","");`,//113、夜を越えて、、BEST HIT AKG2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("114","18","11","");`,//114、冷蔵庫のろくでもないジョーク、それでは、また明日、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("115","19","11","");`,//115、ケモノノケモノ、今を生きて、フィードバックファイル2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("116","19","11","9");`,//116、今を生きて、今を生きて、フィードバックファイル2、横道世之介//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("116","19","15","9");`,///116、今を生きて、今を生きて、BEST HIT AKG2、横道世之介//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("117","4","12","");`,//117、羅針盤、ループ＆ループ、崩壊アンプリファー、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("118","","12","");`,//118、粉雪、、崩壊アンプリファー、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("119","","12","");`,//119、青の歌、、崩壊アンプリファー、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("120","","12","");`,//120、サンディ、、崩壊アンプリファー、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("121","","12","");`,//121、12、、崩壊アンプリファー、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("122","20","13","");`,//122、Easter/復活祭、、Easter、Wonder Future、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("123","","13","");`,//123、Little Lennon/小さなレノン、、Wonder Future、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("124","","13","");`,//124、Winner and Loser/勝者と敗者、、Wonder Future、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("125","","13","");`,//125、Caterpillar/芋虫、、Wonder Future、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("126","21","13","");`,//126、EternalSunshine/永遠の陽光、Right Now、Wonder Future、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("127","","13","");`,//127、Planet of the Apes/猿の惑星、、Wonder Future、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("127","","15","");`,//127、Planet of the Apes/猿の惑星、、BEST HIT AKG2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("128","","13","");`,//128、Standard/スタンダード、、Wonder Future、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("128","","15","");`,//128、Standard/スタンダード、、BEST HIT AKG2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("128","21","13","");`,//129、Wonder Future/ワンダーフューチャー、Right Now、Wonder Future、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("128","21","15","");`,//129、Wonder Future/ワンダーフューチャー、Right Now、BEST HIT AKG2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("130","","13","");`,//130、Prisoner in a Frame/額の中の囚人、、Wonder Future、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("131","","13","");`,//131、Signal on the Street/街頭のシグナル、、Wonder Future、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("132","","13","");`,//132、Opera Glasses/オペラグラス、、Wonder Future、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("133","21","15","");`,//133、Right Now、Right Now、BEST HIT AKG2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("134","23","15","12");`,//134、ブラッドサーキュレーター、ブラッドサーキュレーター、BEST HIT AKG2、NARUTO -ナルト-　疾風伝//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("135","","15","");`,//135、生者のマーチ、、BEST HIT AKG2、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("136","","16","");`,//136、クロックワーク、、ホームタウン、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("137","","16","16");`,//137、ホームタウン、、ホームタウン、神栖クリニックで乾杯を//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("138","","16","");`,//138、レインボーフラッグ、、ホームタウン、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("139","","16","");`,//139、サーカス、、ホームタウン、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("140","24","16","13");`,//140、荒野を歩け、荒野を歩け、ホームタウン、夜は短し歩けよ乙女//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("141","","16","");`,//141、UCLA、、ホームタウン、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("142","","16","");`,//142、Motor Pool、、ホームタウン、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("143","","16","");`,//143、ダンシングガール、、ホームタウン、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("144","","16","");`,//144、さようならソルジャー、、ホームタウン、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("145","25","16","");`,//145、ボーイズ&ガールズ、ボーイズ&ガールズ、ホームタウン、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("146","","17","");`,//146、You To You、、プラネットフォークス、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("147","28","17","21");`,//147、エンパシー、エンパシー、プラネットフォークス、僕のヒーローアカデミア　THE MOVIE　ワールドヒーローズミッション//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("148","27","17","");`,//148、ダイアローグ、ダイアローグ/触れたい確かめたい、プラネットフォークス、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("149","","17","");`,//149、De Arriba、、プラネットフォークス、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("150","28","17","");`,//150、フラワーズ、エンパシー、プラネットフォークス、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("151","","17","");`,//151、星の夜、ひかりの街、、プラネットフォークス、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("152","28","17","");`,//152、触れたい確かめたい、エンパシー、プラネットフォークス、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("153","","17","");`,//153、雨音、、プラネットフォークス、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("154","","17","");`,//154、Gimme Hope、、プラネットフォークス、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("155","","17","");`,//155、C'mon、、プラネットフォークス、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("156","","17","");`,//156、再見、、プラネットフォークス、//

`insert into link ("song_id","single_id","album_id","offer_id") values ("157","","17","");`,//157、Be Alright、、プラネットフォークス、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("158","","","");`,//158、Hello Hello、藤沢ルーザー、、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("159","","","");`,//159、Loser、、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("160","22","","");`,//160、タイムトラベラー、Re:Re:、、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("161","23","","");`,//161、八景、ブラッドサーキュレーター、、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("162","24","","");`,//162、お祭りのあと、荒野を歩け、、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("163","25","","");`,//163、祝日、ボーイズ＆ガールズ、、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("164","","","15");`,//164、スリープ、、、スタートアップ・ガールズ//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("165","","","");`,//165、廃墟の記憶、、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("166","","","");`,//166、イエロー、、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("167","","","");`,//167、はじまりの季節、、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("168","29","","22");`,//168、出町柳パラレルユニバース、出町柳パラレルユニバース、四畳半タイムマシンブルース//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("169","29","","");`,//169、I Just Threw Out Love Of My Dreams、出町柳パラレルユニバース、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("170","29","","");`,//170、追浜フィーリングダウン、出町柳パラレルユニバース、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("171","29","","");`,//171、柳小路パラレルユニバース、出町柳パラレルユニバース、、//

  `insert into link ("song_id","single_id","album_id","offer_id") values ("172","30","","23");`,//172、宿縁、宿縁、、BORUTO -ボルト- NARUTO NEXT GENERATIONS//
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