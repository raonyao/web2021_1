const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

let sqls = [
  `insert into offer ("name") values ("テレビ東京系アニメ『NARUTO-ナルト-』のオープニングテーマ　2003年から第2期(第26話~第35話)");`,

  `insert into offer ("name") values ("TBS系アニメ『鋼の錬金術師』のオープニングテーマ　2004年から第4期(第42話~第51話)");`,

  `insert into offer ("name") values ("アニメ映画『鉄コン筋クリート』の主題歌　2006年上映");`,

  `insert into offer ("name") values ("テレビ東京系アニメ『BLEACH』のオープニングテーマ　2007年から第7期(第144話~第167話)");`,

  `insert into offer ("name") values ("映画『ソラニン』のエンディングテーマ　2010年上映");`,

  `insert into offer ("name") values ("映画『ソラニン』のメインテーマ　2010年上映");`,

  `insert into offer ("name") values ("ノイタミナアニメ『四畳半神話大系』のオープニングテーマ　2010年放送");`,

  `insert into offer ("name") values ("アニメ映画『ROAD TO NINJA -NARUTO THE MOVIE-』の主題歌　2012年上映");`,

  `insert into offer ("name") values ("映画『横道世之介』の主題歌　2013年上映");`,

  `insert into offer ("name") values ("ノイタミナアニメ『僕だけがいない街』のオープニングテーマ　2016年放送");`,

  `insert into offer ("name") values ("映画『ピンクとグレー』の主題歌　2016年上映");`,

  `insert into offer ("name") values ("テレビ東京系アニメ『NARUTO -ナルト-　疾風伝』のオープニングテーマ　2016年から第19期(第459話~第479話)");`,

  `insert into offer ("name") values ("映画『夜は短し歩けよ乙女』の主題歌　2017年上映");`,

  `insert into offer ("name") values ("映画『ハード・コア』のエンディングテーマ");`,

  `insert into offer ("name") values ("映画『スタートアップ・ガールズ』の主題歌");`,

  `insert into offer ("name") values ("BSテレ東ドラマ『神栖クリニックで乾杯を』の主題歌");`,

  `insert into offer ("name") values ("テレビアニメ『どろろ』のオープニングテーマ");`,

  `insert into offer ("name") values ("藤枝MYFC公式応援ソング");`,

  `insert into offer ("name") values ("『ダイハツ　タント　CMソング』");`,

  `insert into offer ("name") values ("JRA「有馬記念」仮想アニメオープニングムービー主題歌");`,

  `insert into offer ("name") values ("『僕のヒーローアカデミア　THE MOVIE　ワールドヒーローズミッション』主題歌　2021年上映");`,

  `insert into offer ("name") values ("アニメ映画『四畳半タイムマシンブルース』主題歌　2022年上映");`,

  `insert into offer ("name") values ("テレビアニメ『BORUTO -ボルト- NARUTO NEXT GENERATIONS』のオープニングテーマ");`,
  
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