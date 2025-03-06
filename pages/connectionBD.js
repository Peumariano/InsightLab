//Conexão com o BD
async function runQuery() {
    const mysql = await import('mysql2');
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '056319',
        database: 'uninterDB'
    });

    connection.connect(function(err) {
        if (err) {
            console.error('Erro ao conectar: ' + err.stack);
            return;
        }
        console.log('Conectado como ID ' + connection.threadId);
    });

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('A solução é: ', results[0].solution);
        connection.end();
    });

    const nome = 'Nome do Usuário';
    const email = 'email@exemplo2.com';
    const senha = 'senha123';

    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(query, [nome, email, senha], (error, results, fields) => {

    if (error) {
        console.error('Erro ao inserir usuário: ' + error);
        return;
    }

    console.log('Usuário inserido com sucesso!');
    });
    }
runQuery();