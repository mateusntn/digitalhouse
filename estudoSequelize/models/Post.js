module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Post',{
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            n_likes : DataTypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );

    Post.associate = (models) => {
        Post.belongsTo(models.Usuario, {as: "usuario", foreignKey: "usuarios_id"});
    }

    return Post;
}