const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*曲テーブル2（ID、曲名、曲の長さ、再生回数）*/

let schema = `
create table songs(
  id integer primary key,
  name text
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
