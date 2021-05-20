exports.response = (res, status, message, result) => {
    let response;
    response = {
        status,
        message,
        data: result
    }
    return res.json({ 'res': response})
}