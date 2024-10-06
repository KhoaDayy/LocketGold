const version = 'V1.0.2';

function setHeaderValue(headers, headerName, headerValue) {
    const lowerCaseName = headerName.toLowerCase();
    headers[lowerCaseName] = headers[lowerCaseName] || headerValue;
}

const modifiedHeaders = $request.headers;
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");

$done({ headers: modifiedHeaders });
