const studantesSchema = (data) => {
    const studante = {
        user_id: data.user_id,
        series_id: data.series_id,
        number_registration: data.number_registration,
        student_responsible_one: data.student_responsible_one,
        student_responsible_two: data.student_responsible_two,
        date_of_birth: data.date_of_birth
    };

    return studante;
};

module.exports = studantesSchema;