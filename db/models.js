//establishing connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Customers', 'root', 'jyotsna', {
  host: 'localhost',
  dialect: 'mysql',
});

//Creating schema for User database
   
  const User = sequelize.define('Shopkeeper', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
   email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }

 
})


  sequelize.sync().then(()=> console.log("Database ready"));

  // i have made email as primary key as it is unique for each user

const Order = sequelize.define('Orders_Description', {
//the total item and cost would be calculated by db itself, i have not made the sql query as tried to udate using sql query,but it didnt worked.
//so i have left the column or the same.
//i will try to think about it in further days and would solve the issue
total_items:{
  type: Sequelize.INTEGER
},

cost:{
  type: Sequelize.FLOAT
},
  email: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'email'
    }
  },

   name_of_item: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
 
   quantity: {
    type: Sequelize.FLOAT,
    allowNull: false
  },

  pos: {
    type: Sequelize.STRING,
    allowNull: false
  }
})



Order.belongsTo(User);

  sequelize.sync().then(()=> console.log("Database ready"));

  module.exports ={ User,Order };













