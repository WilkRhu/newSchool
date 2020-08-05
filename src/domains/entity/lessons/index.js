const lessonsSchema = (data) => {
    const lessons = {
        serie_id: data.serie_id,
        subject_id: data.subject_id,
        title: data.title, 
        content: data.content,
        link: data.link
    };

    return lessons;
};

module.exports = lessonsSchema;