const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*シングルーブル（ID、シングル名、発売日（リリース日）、曲数）*/

let schema = `
create table single(
  id integer primary key,
  name text,
  releaseday text,
  quantity text
);
`

db.serialize( () => {
	db.run( schema, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "テーブルを作成しました" );
	});
});
