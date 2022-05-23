const MINIMUM_QUERY_STRING_LENGTH = 4;
const query = req => {
    const params = req.query;
    if (params.query === undefined || params.query.length < MINIMUM_QUERY_STRING_LENGTH) {
        return 1;
    }
};

export default query;
