const adressSchema = (data) => {
    const address = {
        user_id: data.user_id,
        street: data.street,
        number: data.number,
        city: data.city,
        state: data.state,
        neighborhood: data.neighborhood,
        reference: data.reference
    };

    return address;
};

module.exports = adressSchema;