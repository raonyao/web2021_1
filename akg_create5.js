const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test1.db');

/*曲テーブル（ID、曲名）*/

let schema = `
create table songs2(
  id integer primary key,
  name varchar,
  album_id inreger,
  single_id integer
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
