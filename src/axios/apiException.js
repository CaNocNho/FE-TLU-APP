export const apiException = (error, fnCallback) => {
    fnCallback({
        isShow: true,
        message: error?.data?.message || "Máy chủ không hoạt động. Vui lòng thử lại sau ít phút!",
        statusCode: error?.status,
    });
    return false;
};
