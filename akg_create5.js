const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*曲テーブル（ID、曲名、アルバムID、シングルID、タイアップID）*/

let schema = `
create table song(
  id integer primary key,
  name text,
  album_id integer,
  single_id integer,
  offer_id integer
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
