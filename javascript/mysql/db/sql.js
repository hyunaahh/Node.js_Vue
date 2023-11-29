//sql문 들고있는 객체! 

module.exports = {

    customerList : `select * from customers`,

    customerInfo : 'select * from customers where id = ?',

    customerInsert : `insert into customers set ?`,  //mySql 변형/ 물음표1개 => "객체" 1개 대응됨

    customerUpdate : `update customers set ? where id = ?`, // ?2개 : 배열로 보내야함 ! (객체 x) 

    customerDelete : `delete from customers where id = ?`

}

// field: value => set절 채워줌! 