const subjectSchema = (data) => {
    const subject = {
        name: data.name,
    };

    return subject;
};

module.exports = subjectSchema;