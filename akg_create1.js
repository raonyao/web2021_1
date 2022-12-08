const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test4.db');

/*ID、メンバー名、生年月日（年齢）、血液型、担当楽器のテーブル*/

let schema = `
create table member(
  id integer primary key,
  name text,
  birthday,
  bloodtype,
  instrument
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
