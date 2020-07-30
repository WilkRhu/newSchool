const teacherSchema = (data) => {
    const studante = {
        user_id: data.user_id,
        matter_id: data.matter_id
    };

    return studante;
};

module.exports = teacherSchema;