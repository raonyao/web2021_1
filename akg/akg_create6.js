const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*紐づけのためのテーブル（song_id、single_id、album_id、offer_id）*/

let schema = `
create table link(
  song_id integer primary key,
  single_id integer,
  album_id integer,
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
