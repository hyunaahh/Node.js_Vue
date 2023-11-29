module.exports = {

    userList : `select * from t_users`,

    userInfo : `select * from t_users where user_id=?`,

    userInsert : `insert into t_users set ?`,

    userUpdate : `update t_users set ? where user_id=?`,

    userDelete : `delete from t_users where user_id=?`

}