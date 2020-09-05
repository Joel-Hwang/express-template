var authorityService = {
    createCommonCode: async function (param) {
        let [err, result] = await bs.to(bs.contract.submitTransaction("createCommonCode", param));
        if (err) return `{"status": 500, "message": "${err.message}"}`;
        return result.toString();
    },
    retrieveCommonCodeList: async function (param) {
        let [err, result] = await bs.to(bs.contract.evaluateTransaction("retrieveCommonCodeList", param));
        if (err) return `{"status": 500, "message": "${err.message}"}`;
        return result.toString();
    },
    retrieveCommonCode: async function (groupCode) {
        let [err, result] = await bs.to(bs.contract.evaluateTransaction("retrieveCommonCode", groupCode));
        if (err) return `{"status": 500, "message": "${err.message}"}`;
        return result.toString();
    },
    updateCommonCode: async function (groupCode, param) {
        let [err, result] = await bs.to(bs.contract.submitTransaction("updateCommonCode", groupCode, param));
        if (err) return `{"status": 500, "message": "${err.message}"}`;
        return result.toString();
    },
    deleteCommonCode: async function (groupCode) {
        let [err, result] = await bs.to(bs.contract.submitTransaction("deleteCommonCode", groupCode));
        if (err) return `{"status": 500, "message": "${err.message}"}`;
        return result.toString();
    }
}


module.exports = authorityService;