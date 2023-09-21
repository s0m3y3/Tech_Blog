const User = require('./User');
const Project = require('./Project');
const Blog = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});



module.exports = { User, Project };
