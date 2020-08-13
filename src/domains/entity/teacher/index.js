const teacherSchema = (data) => {
    const studante = {
        user_id: data.user_id,
        subjects: data.subjects,
        series: data.series
    };

    return studante;
};

module.exports = teacherSchema;