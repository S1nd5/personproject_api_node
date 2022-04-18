const mysql = require("../mysql");

const getUsers = () => {
    return new Promise((resolve) => {
        const query = "SELECT * FROM user";
        mysql.execute(query, [], (err, result) => {
            return resolve(result);
        })
    })
}

const getUser = (uid) => {
    return new Promise((resolve) => {
        const query = "SELECT * FROM user WHERE id = ?";
        mysql.execute(query, [uid], (err, result) => {
            if ( err ) return resolve(false);
            if ( result ) return resolve(result);
        })
    })
}

const addUser = (userData) => {
    return new Promise((resolve) => {
        const query = "INSERT INTO user (firstname,lastname,occupation) VALUES(?,?,?)";
        mysql.execute(query, [userData.firstname, userData.lastname, userData.occupation], (err, result) => {
            if ( err ) return resolve(false);
            if ( result.affectedRows > 0 ) return resolve(true);
        })
    }).catch(e => {
        console.error(e);
    })
}

const removeUser = (userId) => {
    return new Promise((resolve) => {
        const query = "DELETE FROM user WHERE id = ?";
        mysql.execute(query, [userId], (err,result) => {
            if ( err ) return resolve(false);
            if ( result ) return resolve(true);
        })
    })
}

/* TBD */

const updateUser = (userData) => {
    return new Promise((resolve) => {
        
    })
}

module.exports = { getUsers, getUser, addUser, removeUser }