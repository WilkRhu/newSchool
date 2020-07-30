const matterSchema = (data) => {
    const matter = {
        user_id: data.user_id,
        matter_id: data.matter_id
    };

    return matter;
};

module.exports = matterSchema;